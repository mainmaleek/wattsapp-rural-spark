/**
 * @file powerbox_telemetry.h
 * @brief Powerbox Telemetry and Reliability Data Definitions.
 * 
 * Part of the Powerbox Open Source Energy Monitoring Platform for Healthcare.
 */

#ifndef POWERBOX_TELEMETRY_H
#define POWERBOX_TELEMETRY_H

#include <stdint.h>
#include <stdbool.h>

/**
 * @brief Telemetry status codes for health indicators
 */
typedef enum {
    HEALTH_OPTIMAL,
    HEALTH_STABLE,
    HEALTH_WARNING,
    HEALTH_CRITICAL,
    HEALTH_FAULT
} powerbox_health_t;

/**
 * @brief Main Telemetry Data Structure
 */
typedef struct {
    uint32_t timestamp;        // UNIX timestamp if available
    uint32_t sequence_id;      // Sequence for store-and-forward tracking
    
    // Battery System Telemetry
    float battery_voltage;     // Volts (V)
    float battery_current;     // Amps (A) - positive for charging, negative for discharge
    float battery_soc;         // State of Charge (%)
    uint32_t charge_cycles;    // Cumulative charge cycles
    float battery_temp;        // Internal battery temperature (C)
    
    // Solar & Energy Generation
    float solar_power_w;       // Solar generation (Watts)
    float active_load_w;       // Current clinic load demand (Watts)
    
    // Environment & Climate Sensors
    float ambient_temp;        // Clinical ambient temperature (C)
    float humidity;            // Clinical humidity (%)
    
    // Reliability Features
    bool inverter_active;      // Inverter ON/OFF status
    bool cold_chain_stable;    // Boolean indicator for vaccine cooler stability
    powerbox_health_t system_health; // Overall internal system health indicator
    
} powerbox_telemetry_t;

/**
 * @brief Max telemetry storage for store-and-forward queue
 */
#define MAX_STORED_SAMPLES 1024

/**
 * @brief Initialize sensor interfaces
 */
void powerbox_sensors_init(void);

/**
 * @brief Read current telemetry from all integrated sensors
 * 
 * @param data Pointer to telemetry structure to fill
 */
void powerbox_read_sensors(powerbox_telemetry_t *data);

/**
 * @brief Store telemetry to local memory (Store-and-Forward)
 * 
 * @param data Telemetry data to store
 * @return true if stored successfully, false if storage is full
 */
bool powerbox_storage_push(powerbox_telemetry_t *data);

/**
 * @brief Retrieve earliest unsent telemetry for transmission
 * 
 * @param data Output telemetry data
 * @return true if data was retrieved, false if queue is empty
 */
bool powerbox_storage_pop(powerbox_telemetry_t *data);

/**
 * @brief Format telemetry for Cloud/Dashboard transmission (JSON format)
 * 
 * @param data Pointer to telemetry data
 * @param buffer Output buffer for formatted payload
 * @param buffer_size Size of the output buffer
 */
void powerbox_format_payload(powerbox_telemetry_t *data, char *buffer, uint16_t buffer_size);

#endif // POWERBOX_TELEMETRY_H
