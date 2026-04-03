#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>

#include "include/powerbox_telemetry.h"

/**
 * @brief Simple random noise generator for simulation
 * 
 * @param min Minimum value
 * @param max Maximum value
 * @return float Randomized value within range
 */
static float random_float(float min, float max) {
    return min + (float)rand() / ((float)RAND_MAX / (max - min));
}

/**
 * @brief Initialize sensor interfaces (Simulation)
 */
void powerbox_sensors_init(void) {
    printf("[POWERBOX] Initializing ADC, I2C, and OneWire bus...\n");
    srand(time(NULL));
    printf("[POWERBOX] Sensors online. Clinic ID: K-SOUTH-001\n");
}

/**
 * @brief Simple daylight simulation factor (0.0 to 1.0)
 * 
 * In real implementation, this is replaced by actual LDR or Solar Voltage measurement.
 */
static float get_solar_multiplier() {
    time_t t = time(NULL);
    struct tm *tm = localtime(&t);
    int hour = tm->tm_hour;

    if (hour < 6 || hour > 18) return 0.0f; // Night time
    if (hour >= 11 && hour <= 14) return 1.0f; // Peak sun
    
    // Sloped curve for morning/evening
    if (hour < 11) return (float)(hour - 6) / 5.0f;
    return (float)(18 - hour) / 4.0f;
}

/**
 * @brief Read current telemetry from integrated sensors
 * 
 * @param data Pointer to telemetry structure to be filled
 */
void powerbox_read_sensors(powerbox_telemetry_t *data) {
    static uint32_t seq = 0;
    
    data->timestamp = (uint32_t)time(NULL);
    data->sequence_id = seq++;
    
    // Simulate Battery Telemetry
    data->battery_voltage = random_float(48.5f, 54.2f);
    data->battery_current = random_float(-10.0f, 15.0f);
    data->battery_soc = random_float(65.0f, 98.5f);
    data->charge_cycles = 142; // Cumulative static for simulation
    data->battery_temp = random_float(28.5f, 42.0f);
    
    // Simulate Solar generation based on solar time of day
    float solar_mult = get_solar_multiplier();
    data->solar_power_w = solar_mult * random_float(180.0f, 220.0f);
    
    // Simulate Clinical Clinic load
    data->active_load_w = random_float(45.0f, 120.0f);
    
    // Simulate Environmental Sensors
    data->ambient_temp = random_float(22.0f, 36.5f);
    data->humidity = random_float(40.0f, 65.0f);
    
    // Logic for reliability checks
    data->inverter_active = (data->battery_voltage > 48.0f);
    data->cold_chain_stable = (data->ambient_temp < 38.0f); // Simple health threshold
    
    // System health classification
    if (data->battery_temp > 40.0f || data->battery_voltage < 48.2f) {
        data->system_health = HEALTH_WARNING;
    } else {
        data->system_health = HEALTH_OPTIMAL;
    }
    
    printf("[DEBUG] READ: V:%.1fV, Soc:%.1f%%, Sun:%.1fW, Temp:%.1fC, Health:%d\n", 
           data->battery_voltage, 
           data->battery_soc, 
           data->solar_power_w, 
           data->ambient_temp, 
           data->system_health);
}
