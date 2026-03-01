---
title: "PID Line Follower"
description: "Learn how to tune a Proportional-Integral-Derivative controller to build an incredibly fast and smooth line following robot."
---

# PID Line Follower Algorithm

A Line Follower Robot is one of the classic projects for beginners and intermediate robotics enthusiasts. While a simple logic like 'If left sensor sees white, turn right' works, it creates a jerky zig-zag motion. A PID controller provides perfectly smooth turns.

## What is PID?

PID stands for Proportional, Integral, Derivative.

1. **Proportional (P):** Steers the robot based directly on the current error (how far from the center of the line). 
2. **Integral (I):** Looks at the accumulation of error over time. Helps eliminate steady-state offsets.
3. **Derivative (D):** Predicts future error by looking at the rate of change. Dampens the 'P' term to prevent overshooting (oscillation).

## Basic Implementation Logic

To implement PID, you calculate an "Error" value based on your IR sensor array (e.g., QTR-8RC). The center of the line might be 3500. If your sensor reads 2000, your error is -1500.

```cpp
int error = position - 3500;
P = error;
I = I + error;
D = error - lastError;
lastError = error;

int motorSpeedChange = P*Kp + I*Ki + D*Kd;

int baseSpeed = 150;
int leftMotorSpeed = baseSpeed + motorSpeedChange;
int rightMotorSpeed = baseSpeed - motorSpeedChange;

// Constrain speeds and write to motors
```

## Tuning Tips
- Start with `Kp`, keep `Ki` and `Kd` at 0. Find the value that allows it to follow the line but oscillates.
- Increase `Kd` to dampen the oscillation.
- Add `Ki` very carefully if it struggles on sharp curves, though many basic line followers run perfectly as just a "PD" controller.
