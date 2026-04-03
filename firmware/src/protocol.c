#include <stdio.h>
#include <string.h>

#include "include/powerbox_telemetry.h"

/**
 * @brief Format health code to string for JSON report
 * 
 * @param health Health enum value
 * @return const char* String representation of health
 */
static const char* health_to_str(powerbox_health_t health) {
    switch (health) {
        case HEALTH_OPTIMAL: return "OPTIMAL";
        case HEALTH_STABLE: return "STABLE";
        case HEALTH_WARNING: return "WARNING";
        case HEALTH_CRITICAL: return "CRITICAL";
        default: return "FAULT";
    }
}

/**
 * @brief Format telemetry for Cloud/Dashboard transmission (JSON format)
 * 
 * @param data Pointer to telemetry data
 * @param buffer Output buffer for formatted payload
 * @param buffer_size Size of the output buffer
 */
void powerbox_format_payload(powerbox_telemetry_t *data, char *buffer, uint16_t buffer_size) {
    if (!data || !buffer) return;

    // Build the JSON payload to match our frontend expectations
    // Clinic ID is typically injected via device environment variables in real cases
    snprintf(buffer, buffer_size, 
        "{ \"clinic_id\": \"K-SOUTH-001\", "
        "\"ts\": %u, "
        "\"seq\": %u, "
        "\"batt\": { \"V\": %.2f, \"A\": %.2f, \"soc\": %.1f, \"cycles\": %u, \"T\": %.1f }, "
        "\"solar\": { \"W\": %.1f }, "
        "\"load\": { \"W\": %.1f }, "
        "\"env\": { \"T\": %.1f, \"H\": %.1f }, "
        "\"status\": { \"inv\": %s, \"cc\": %s, \"health\": \"%s\" } }",
        data->timestamp,
        data->sequence_id,
        data->battery_voltage, 
        data->battery_current,
        data->battery_soc,
        data->charge_cycles,
        data->battery_temp,
        data->solar_power_w,
        data->active_load_w,
        data->ambient_temp,
        data->humidity,
        data->inverter_active ? "true" : "false",
        data->cold_chain_stable ? "true" : "false",
        health_to_str(data->system_health)
    );
}
