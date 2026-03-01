---
title: "Arduino Basics"
description: "A comprehensive introduction to programming Arduino microcontrollers, understanding GPIOs, and interacting with sensors and actuators."
---

# Introduction to Arduino

Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects. 

## Getting Started

1. **Download the Arduino IDE:** Ensure you have the latest IDE installed from the official Arduino website.
2. **Connect your board:** Plug in your Arduino Uno (or compatible board) via USB.
3. **Select your Port and Board:** Under `Tools`, select the correct COM port and board type.

## Basics of an Arduino Sketch

An Arduino program, known as a 'sketch', consists of two main functions:

```cpp
void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off
  delay(1000);                       // wait for a second
}
```

This simple program blinks the onboard LED on and off every second.

### Key Concepts to Learn Next:
- Digital vs Analog Input/Output
- Pulse Width Modulation (PWM) for motor control
- Serial Communication for debugging
