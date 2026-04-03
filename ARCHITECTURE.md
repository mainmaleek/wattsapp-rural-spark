# Powerbox — Integrated Reliability Architecture

This project combines a **Real-Time Health Dashboard** with **Embedded Energy Telemetry** to ensure 24/7 power for primary healthcare facilities.

## 1. Embedded Layer (`/firmware`)
Built in C for high performance on edge devices (ESP32/STM32/etc.).
- **Sensor Collection**: Reads battery voltage, charge current, and solar generation.
- **Store-and-Forward**: Queues data locally during low-connectivity (GSM outages).
- **JSON Protocol**: Lightweight payload formatting for cloud ingestion.

## 2. Platform Dashboard (`/src`)
A modern React-based monitoring interface for healthcare administrators.
- **Telemetry Visuals**: Real-time AreaCharts showing solar supply vs. clinic load.
- **Facility Readiness**: AI-driven health scoring for vaccine cold-chain stability.
- **Maintenance Center**: Coordinator-facing dispatch alerts for field technicians.

## 3. Integration Data Map
Firmware reports data using the following high-level JSON structure:
- `batt.V`: Battery Voltage (V)
- `solar.W`: Solar Generation (Watts)
- `env.T`: Clinic Ambient Temperature (C) — Critical for vaccine storage integrity.
- `status.cc`: Cold-Chain Stability Boolean.

---
© 2025 Powerbox Energy Systems Ltd. — Open Source Resilience.
