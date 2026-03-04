---
title: 'Electronics Roadmap'
date: '2024-03-04'
description: 'A guide to getting started with electronics and microcontrollers'
tags: ['Electronics', 'Arduino', 'Microcontrollers']
---

# <a id="_pz0oa48v8kh2"></a>__Week 1: Microcontrollers 101__

# <a id="_65hrmk4mva7x"></a>__Objective:__ This week, we’ll dig deep into the heart of a robot—the microcontroller\! You’ll learn to charm Arduinos, ESPs, and STMs, and even compare their personalities \(without hurting their feelings\)\. Plus, get your hands on some virtual circuit\-building with Tinkercad\.

#### <a id="_qfv469jh9fnj"></a>__Resources:__

__Arduino \(The Starter Pack for Robot Brains\):__

- 
	- [Arduino Video Playlist \(Binge\-watch like it’s Netflix\)](https://www.youtube.com/playlist?list=PLPK2l9Knytg5s2dk8V09thBmNl2g5pRSr)
	- [Arduino Official Site \(Home of the Blinky LEDs\)](https://www.arduino.cc/)
	- Suggested Learning: Get familiar with digital pins, analog inputs, and the general attitude of making LEDs blink and servos spin\.
	- For checking out how various interesting projects are built using Arduino [https://www\.youtube\.com/playlist?list=PLGs0VKk2DiYw\-L\-RibttcvK\-WBZm8WLEP ](https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP)

__ ESP32 \(The “Smart” One\):__

- 
	- [Getting Started with ESP32](https://randomnerdtutorials.com/getting-started-with-esp32/)
	- [ESP32io \(ESP’s Personal Diary\)](https://esp32io.com/)
	- Focus: Explore the Wi\-Fi, Bluetooth, and low\-power modes of ESP32\. Who knew this little guy could multitask better than us?

__STM32 \(The Serious Professional\):__

- 
	- [STM32 Guide \(For When You Want to Build “Grown\-Up” Robots\)](https://erc-bpgc.github.io/handbook/electronics/Development_Boards/STM32/)
	- Recommended Study: Cover basic configuration, GPIO, and interrupt handling\. Unlike Arduino’s laid\-back style, STM demands attention to detail\.

__         Raspberry Pi __

- For Starters [https://youtube\.com/playlist?list=PLPK2l9Knytg67nkvpnnl81ossAHfOgmqU](https://youtube.com/playlist?list=PLPK2l9Knytg67nkvpnnl81ossAHfOgmqU)
- Another interesting resource 

[https://www\.youtube\.com/@TheRaspberryPiGuy/featured](https://www.youtube.com/@TheRaspberryPiGuy/featured)

__ Compare Arduino UNO vs\. STM32F103C8T6:__

- 
	- Draw a comparison table covering processing power, GPIO availability, memory, and use cases\. Think of it like speed\-dating for microcontrollers\.

__  Tinkercad Circuits — The Virtual Playground:__

- 
	- [Intro to Tinkercad Circuits](https://www.tinkercad.com/learn/circuits?collectionId=O0K87SQL1W5N4P2)
	- Get Started: Simulate circuits, tinker with LED blinkers, and get hands\-on without blowing up real resistors\. \(Trust us, the LEDs will thank you\.\) 

#### <a id="_sju20synpm8k"></a>__Assignments:__

1. __Arduino on Tinkercad:__
	- Build a *“Blink”* project where an LED blinks every second\.
	- Challenge: Create a traffic light system using three LEDs \(Red, Yellow, Green\) with timing intervals like a real intersection\.
2. __KnockLock on Tinkercad:__
	- Follow[ this guide](https://www.tinkercad.com/learn/overview/OP6T6C6ISCC2VBC?collectionId=O0K87SQL1W5N4P2&type=circuits) to build a KnockLock circuit\.
	- What is it? A lock that only opens when you *knock* in the right pattern\. \(Even better than a secret handshake\.\)
3. __STM32 & ESP32:__
	- Implement a simple blink project on both STM32 and ESP32\.
	- Bonus: Use ESP32’s Wi\-Fi capability to send the status of the LED to your smartphone\. Now you’ve got a blinking light *and* a notification\. High\-tech, right?
4. __Report Writing:__
	- Prepare a short comparison between Arduino UNO and STM32F103C8T6\. Points to include: clock speed, GPIO pins, communication protocols, and suitability for different projects\.
	- Tip: Be diplomatic\. We don’t want to hurt Arduino’s feelings\!

### <a id="_edldn9cmi41w"></a>

### <a id="_tjodk6sc11cg"></a>__Week 2: Sensors and Circuits__

### <a id="_3dw6om1fdo3o"></a>__Objective:__ This week, give your robot the ability to *see*, *sense*, and *respond*\. Dive into the world of sensors, figure out which wires to use \(and not use\), and calculate battery power—so your bot doesn’t run out of juice mid\-robot battle\.

#### <a id="_9glm6f7g1mij"></a>__Resources:__

1. __Sensor Scouting:__
	- [Guide to Popular Arduino Sensors](https://www.learnrobotics.org/blog/popular-arduino-sensors/)
	- Suggested Topics: Ultrasonic, Infrared \(IR\), Temperature, Proximity, and more\. Learn how to make your bot see in the dark \(IR\), avoid obstacles \(Ultrasonic\), and possibly even know when to cool off \(Temperature\)\.
	- Pro Tip: Think about where each sensor could be used—ultrasonics for navigation, IRs for line following, and temperature sensors to keep your circuits from overheating\.
2. __ IMU \(Inertial Measurement Unit :__
	- [IMU Sensor Working & Applications](https://www.elprocus.com/imu-sensor-working-applications/)
	- [IMU Explained — Video Guide](https://www.youtube.com/watch?v=SVI_NldMjlE&ab_channel=MissionCritical)
	- I2C Explained: [https://www\.youtube\.com/playlist?list=PLDkCXvVkbeo\_GzS5fpEYFAY1wdNbe\-zA7](https://www.youtube.com/playlist?list=PLDkCXvVkbeo_GzS5fpEYFAY1wdNbe-zA7)
	- Focus: Understand accelerometers, gyros, and magnetometers\. IMUs tell your robot which way is up, down, and when it’s spinning around \(so it doesn’t get dizzy\)\.
3. __Choosing Wires:__
	- [Basic Wiring Guide for Bots](https://wiki.sdrobots.com/index.php/Basic_Wiring_Guide)
	- Key Takeaway: Learn which wires to use based on current ratings\. Pay special attention to the AWG \(American Wire Gauge\) table, because using the wrong wire is like asking your bot to run a marathon in flip\-flops\.
4. __ Battery Calculations — Keep the Lights On:__
	- [How to Calculate Battery Runtime](https://www.dnkpower.com/how-to-calculate-battery-run-time/)
	- Formula Fun: Figure out how long your battery will last before your bot takes a nap\. Master this, and you’ll be the hero that prevents mid\-competition shutdowns\.
5. __Which Battery To Use?__
	- [https://medium\.com/husarion\-blog/batteries\-choose\-the\-right\-power\-source\-for\-your\-robot\-5417a3ec19ca](https://medium.com/husarion-blog/batteries-choose-the-right-power-source-for-your-robot-5417a3ec19ca)

#### <a id="_404dtsu20iot"></a>__Assignments:__

1. __ Sensor Research Project:__
	- Pick two sensors \(e\.g\., Ultrasonic and IR\) and write a short summary of how they work and where you would use them in a robot\.
	- Bonus: Find one unconventional use for each\. \(Ever thought of using a temperature sensor as a hand gesture detector?\)
2. __ IMU Challenge:__
	- Write a code snippet to read basic IMU data \(if you have an actual IMU sensor, use it, otherwise, explore some simulation tools or libraries\)\.
	- Bonus: Visualise the IMU data in a graph\. Let’s see some wavy lines\!
3. __Battery Runtime Calculation:__
	- Calculate the required battery capacity for a small bot that has:
		- One 12V DC motor \(drawing 1\.5 A\)
		- One servo \(drawing 0\.5 A\)
		- A few LEDs and sensors \(combined draw of 0\.2 A\)
	- Hint: Use the formula from the resource\. Show your working steps—because maths deserves its own spotlight\!

### <a id="_smhehypcmds9"></a>__Week 3: Motors and Motor Drivers:__

__Objective: __This week, explore the fundamentals of motors and motor drivers\. Understand how different types of motors function, learn to select the right motor driver for your project, and master the wiring connections—so your bot doesn’t end up spinning in circles\. Calculate power requirements to ensure smooth and efficient operation, keeping your robot running at peak performance\.

#### <a id="_dusacorwsbea"></a>__Resources:__

1. __Motors — \(So Your Bot Doesn’t Just Sit There\):__
	- [Types of Motors Used in Robotics](https://robocraze.com/blogs/post/types-of-motors-used-in-robotics?srsltid=AfmBOor7ZhmZgBLCm5_IljRFKZg79_GM7rcRgokr9vhlJ-m4vwZToj1T)
	- Study: Learn about DC motors, stepper motors, and servos\. Each has a unique personality—pick the right one, and your bot will move like a dream\. Pick the wrong one, and… well, let’s just say things might get a bit jittery\.
2. __Choosing the Right Motor :__
	- [Motor Selection Guide](https://drive.google.com/file/d/105CuPGm6KznU1-lU8gB7wIvGDmhAnyhJ/view)
	- Key Points: Dive into torque, RPM, and power calculations\. Think of it as matchmaking for motors—find the one that fits your bot’s needs perfectly\.

__   3\. Motor Drivers:__

- 
	- [Types of Motor Drivers](https://robocraze.com/blogs/post/what-is-motor-driver?srsltid=AfmBOoranLLHNdeAB42ieIax_Q2SsluJm4dUs8LLQ7JDbBk97FB6yr3j)
	- Focus: Explore the L298N, H\-Bridge, and other drivers to ensure smooth control\. Without a good driver, your motor is just a fancy paperweight\.

__   4\. Motor Control Using L298N:__

- 
	- [Controlling Two DC Motors Using L298N & Arduino](https://www.youtube.com/watch?v=dyjo_ggEtVU&ab_channel=DroneBotWorkshop)
	- Hands\-On: Follow along to control two DC motors using the L298N driver and Arduino\. This is where you get to make the motors dance\.

#### <a id="_ytl2xd6ij149"></a>__Assignments:__

__ Motors Analysis:__

Create a comparison table for at least 3 different types of motors \(e\.g\., DC, stepper, servo\) covering torque, speed, control complexity, and applications\.

__Week 4:  Control systems__

Control systems help to control the movements and functions of the robot\. We need the controllers because the dynamics vary with the time\. When the robot moves up in a slope and then down in the slope, or first travels on smooth concrete, then on a carpeted floor\. So physical modelling of the “System” becomes crucial for designing a good controller\.We give a reference state to a controller\. The controller also has sensor feedback, using the reference state and sensor feedback controller generates a control signal needed to reach the reference state\. This control signal is fed to the “System”\. The system dynamics determine how the system behaves to this control input\. If the controller is good, hopefully, the “System” will reach our desired reference state\.

1. __PID Controller:\-__

[https://youtube\.com/playlist?list=PLn8PRpmsu08pQBgjxYFXSsODEF3Jqmm\-y&si=uixb94INFcDcve5h](https://youtube.com/playlist?list=PLn8PRpmsu08pQBgjxYFXSsODEF3Jqmm-y&si=uixb94INFcDcve5h)

[PID Controller Explained](https://youtu.be/fv6dLTEvl74?si=_YiRAFH1Ub1R3pq9)

1. Control System in Practical:\- https://youtube\.com/playlist?list=PLn8PRpmsu08pFBqgd\_6Bi7msgkWFKL33b&si=DWcEDZyBptvq22P1

This playlist teaches some more basic concepts of Control Theory and how to practically apply them\.

__Kalmann Filter:\-__[Visually Explained: Kalman Filters](https://youtu.be/IFeCIbljreY?si=L5cvIlVMVzC-4ew8)

 

