---
title: "Getting Started with Arduino"
description: "Exact copy of the official Arduino Getting Started Guide"
---

# Getting Started with Arduino

Welcome to the Arduino getting started guide! If you arrived here, you might be a little bit confused about how to use an Arduino board, or you just want to learn more about it. In this tutorial, you will quickly learn how to use an Arduino board and the Arduino Software (IDE).

If you are looking for a specific topic, you can easily find it in the navigation menu on the left.

## What is Arduino?

Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects.

### The Hardware

An Arduino board is a small microcontroller that can read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online. You can tell your board what to do by sending a set of instructions to the microcontroller on the board.

### The Software

To write the instructions, you use the Arduino programming language (based on Wiring), and the Arduino Software (IDE), based on Processing.

## What do I need?

To get started, you will need an Arduino board and a USB cable. You will also need a computer, and we recommend using Windows, macOS or Linux.

## First steps

Before you can start writing code and making your board do things, you need to set up the software. There are two options:

### 1. Web Editor

The Arduino Web Editor allows you to write code and upload sketches to any official Arduino board directly from your web browser (Chrome, Firefox, Safari and Edge). We recommend using the Web Editor because it saves your sketches in the cloud and always has the most up-to-date features and libraries.

To use the Web Editor, you will need to create an Arduino account.

### 2. Desktop IDE

If you prefer working offline, you should use the latest version of the desktop IDE. You can download the Arduino IDE 2 from the Software page. The Arduino IDE 2 features an integrated editor, upload functionality, board management, and serial monitor.

## Connect the board

Once you have your software setup, you can connect your board to your computer.

1. Connect the board to your computer using the USB cable.
2. The green power LED (labeled PWR) should go on.

## Writing your first sketch

We will use the Web Editor or Desktop IDE to write our first sketch. A sketch is the name that Arduino uses for a program. It's the unit of code that is uploaded to and run on an Arduino board.

1. Open the Arduino Web Editor, or Desktop IDE.
2. If you are using the Web Editor, you will need to install the Arduino Create Agent. You will be prompted to do this if you haven't already.

Copy and paste the following code into your editor:

```cpp
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

## Select board & port

Before you can upload the code, you need to tell the IDE which board you are using and which port it is connected to.

1. In the Web Editor, go to the drop-down menu at the top, and select your board and the port it is connected to.
2. In the Desktop IDE, go to **Tools > Board** and select your board. Then go to **Tools > Port** and select the port it is connected to.

## Upload the code

Now, simply click on the **Upload** button.

If the upload was successful, the message "Done uploading" will appear in the bottom output area. At the same time, the TX and RX LEDs on the board will flash.

If nothing happens inside the output area, or if you get an error message, please make sure you selected the right board and port.

## Conclusion

Congratulations! You have successfully uploaded your first sketch to an Arduino board. The built-in LED on your board should now be blinking.
