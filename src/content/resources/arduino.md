---
title: "Getting Started with Arduino"
description: "A comprehensive guide to getting started with Arduino, based on the official documentation. Learn about the hardware, the software, and how to write your very first sketch."
---

# Getting Started with Arduino

Welcome to the beginner's guide to Arduino! This tutorial will walk you through the very basics: what an Arduino is, what you need to get started, and how to write and upload your first program.

## What is Arduino?

Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects. 
- **The Hardware:** An Arduino board is a small microcontroller that can read inputs (light on a sensor, a finger on a button, or a Twitter message) and turn it into an output (activating a motor, turning on an LED, publishing something online).
- **The Software:** You tell your board what to do by sending a set of instructions to the microcontroller on the board. To do so you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.

---

## What You Need

To follow this tutorial and write your first program, you will need:
1. **An Arduino Board** (e.g., Arduino UNO Rev3)
2. **A USB Cable** (Type A to Type B for the UNO)
3. **A Computer** (Windows, macOS, or Linux) with an internet connection.

---

## Software Selection

There are two ways to program your Arduino board:

### 1. Arduino Web Editor (Online)
You can use the online IDE, which saves your sketches in the cloud and always has the latest features and libraries. 
*To use the Web Editor, you just need to create a free Arduino account and install a small plugin.*

### 2. Arduino IDE (Offline)
If you prefer working offline, you can download the **Arduino IDE 2.0**. This is a powerful desktop application available for Windows, macOS, and Linux.
*Download it from the [official software page](https://www.arduino.cc/en/software).*

---

## Connecting Your Board

Once you have your software ready, it's time to plug in your board! 
Connect your Arduino board to your computer using the USB cable. The green power LED (labeled **PWR**) should light up.

---

## Your First Sketch: Blink

In the Arduino world, programs are called **"Sketches"**. Every sketch has two main functions:
1. `setup()` - Runs once when the board powers on. Used to configure pins.
2. `loop()` - Runs continuously over and over again.

Let's open the classic "Blink" example to test our board. In the IDE, go to:
**File > Examples > 01.Basics > Blink**

The code will look like this:

```cpp
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
```

---

## Selecting Your Board and Port

Before you can upload the code, you need to tell the IDE which board you are using and which port it is connected to.
1. Go to **Tools > Board** and select your board (e.g., *Arduino UNO*).
2. Go to **Tools > Port** and select the port your board is connected to. It usually says something like *(Arduino Uno)* next to it.

---

## Uploading the Code

Now simply click the **Upload** button (the right-pointing arrow at the top of the IDE). 

You should see the `RX` and `TX` LEDs on your board flashing as the code is transferred. Once it's done, the IDE will say "Done Uploading".

### Success!
Look at your board! The built-in LED (often near pin 13) should be blinking on for a second, off for a second, repeatedly. 

Congratulations! You've successfully completely your first Arduino project! To explore further, try changing the `delay(1000)` values to `100` and see what happens when you re-upload!
