#include <stdio.h>
#include <string.h>

#include "include/powerbox_telemetry.h"

/**
 * @brief Simple circular buffer to store telemetry offline
 */
static powerbox_telemetry_t telemetry_queue[MAX_STORED_SAMPLES];
static uint16_t head = 0;
static uint16_t tail = 0;
static uint16_t count = 0;

/**
 * @brief Store telemetry to local memory (Store-and-Forward)
 * 
 * @param data Telemetry data to store
 * @return true if stored successfully, false if storage is full
 */
bool powerbox_storage_push(powerbox_telemetry_t *data) {
    if (count >= MAX_STORED_SAMPLES) {
        printf("[STORAGE] ERROR: Buffer Full. Data dropped at seq: %u\n", data->sequence_id);
        return false;
    }
    
    // Copy data into our circular storage
    memcpy(&telemetry_queue[head], data, sizeof(powerbox_telemetry_t));
    
    // Increment head and wrap if needed
    head = (head + 1) % MAX_STORED_SAMPLES;
    count++;
    
    return true;
}

/**
 * @brief Retrieve earliest unsent telemetry for transmission
 * 
 * @param data Output telemetry data
 * @return true if data was retrieved, false if queue is empty
 */
bool powerbox_storage_pop(powerbox_telemetry_t *data) {
    if (count == 0) {
        return false;
    }
    
    // Copy out our earliest data
    memcpy(data, &telemetry_queue[tail], sizeof(powerbox_telemetry_t));
    
    // Increment tail and wrap if needed
    tail = (tail + 1) % MAX_STORED_SAMPLES;
    count--;
    
    return true;
}

/**
 * @brief Simple helper function to check if we have data to send
 * 
 * @return uint16_t count of unsent samples
 */
uint16_t powerbox_storage_count(void) {
    return count;
}
