---
title: "TinkerCAD"
description: "A comprehensive guide to using Autodesk TinkerCAD circuits and basic 3D modeling for rapid prototyping before buying components."
---

# Prototyping with TinkerCAD

TinkerCAD is a free, online 3D modeling program that runs in a web browser. For robotics, it includes an incredibly powerful **Circuits Simulator**.

## Why use TinkerCAD Circuits?

Before you wire up a physical circuit and potentially short-circuit expensive components like Motor Drivers or Arduino Megas, you can build them virtually.

1. **Virtual Components:** It provides virtual Arduinos, breadboards, LEDs, motors, multimeters, and ultrasonic sensors.
2. **Code Simulation:** You can write C++ code for your virtual Arduino inside TinkerCAD and hit "Start Simulation".
3. **Serial Monitor:** Test your sensors and serial output directly in the built-in console.
4. **Safety:** If you wire an LED without a resistor, the simulator will visually show the LED exploding, saving you real-world hardware.

## Quick Start Circuit
1. Log into TinkerCAD.
2. Go to **Circuits** > **Create new Circuit**.
3. Drag a **Breadboard Small** and an **Arduino Uno R3** into the workspace.
4. Wire a circuit from Pin 13 into a Resistor, into an LED, and back to Ground.
5. Click **Code** (switch from Blocks to Text) and run a basic Blink script.
6. Click **Start Simulation**.

It is highly recommended for all first-year club members to verify their motor logic via TinkerCAD before transitioning to physical hardware.
