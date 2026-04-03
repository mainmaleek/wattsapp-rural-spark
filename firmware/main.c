#include <stdio.h>
#include <unistd.h>
#include <stdbool.h>

#include "include/powerbox_telemetry.h"

int main() {
    printf("--------------------------------------------------\n");
    printf("   POWERBOX EMBEDDED RELIABILITY PLATFORM v1.0    \n");
    printf("   OPEN SOURCE ENERGY MONITORING FOR HEALTHCARE  \n");
    printf("--------------------------------------------------\n\n");

    // Initialize Mock Sensors
    powerbox_sensors_init();

    // Main Operation Loop
    bool connectivity = true; // Simulating intermittent network
    uint8_t loop_count = 0;

    while (loop_count < 10) { // Simulate 10 data cycles
        printf("\n[CYCLE %d]\n", loop_count + 1);
        
        // 1. Read Current Telemetry
        powerbox_telemetry_t current_reading;
        powerbox_read_sensors(&current_reading);

        // 2. Local Storage (Store-and-Forward)
        powerbox_storage_push(&current_reading);
        
        // 3. Connectivity Simulation (Toggle every 3 cycles)
        if (loop_count == 4 || loop_count == 5) {
            connectivity = false;
        } else {
            connectivity = true;
        }

        // 4. Transmission Attempt
        if (connectivity) {
            printf("[NETWORK] Connected. Clearing unsent samples\n");
            
            powerbox_telemetry_t to_send;
            while (powerbox_storage_pop(&to_send)) {
                char payload[512];
                powerbox_format_payload(&to_send, payload, sizeof(payload));
                printf("[NETWORK] TX Payload (seq:%u):\n%s\n", to_send.sequence_id, payload);
            }
        } else {
            printf("[NETWORK] ERROR: No connection. Queueing telemetry on-device.\n");
        }

        loop_count++;
        sleep(2); // Wait 2s between telemetry cycles
    }

    printf("\n[SYSTEM] Operation Cycle Complete. Suspending and entering deep-sleep.\n");
    return 0;
}
