---
title: "Fusion 360"
description: "Learn how to transform your robotic designs from pure imagination into professional 3D CAD models ready for 3D printing or CNC machining."
---

# 3D Modeling with Fusion 360

Autodesk Fusion 360 is a powerful, cloud-integrated CAD (Computer-Aided Design), CAM (Computer-Aided Manufacturing), and CAE (Computer-Aided Engineering) tool. It's the standard for our club members when designing structural parts for robots.

## Setting Up

Fusion 360 is free for students and educators. 
1. Create an Autodesk account using your university `.edu` email.
2. Download and install Fusion 360.

## Core Concepts of CADing a Part

1. **Sketches:** Every 3D part begins as a 2D sketch on a plane (XY, XZ, or YZ). A closed profile (like a circle or a complex gear shape) is required.
2. **Extrude:** The most common operation. Take your 2D sketch profile and pull it into the 3rd dimension (giving it depth/thickness).
3. **Revolve:** For cylindrical parts (like a wheel or motor shaft), you draw half the profile and revolve it 360 degrees around an axis.
4. **Fillets & Chamfers:** Sharp 90-degree corners are weak and easily break when 3D printed. Use the Fillet tool to round them out and distribute stress.
5. **Hole Tool:** When creating mounting holes for M3 or M4 screws, use the specific Hole tool rather than just extruding a 3mm circle. It allows for countersinks and threading.

## Assembly

In Fusion 360, when building a complex robot (like a Hexapod), you don't build it all in one file. You build individual components (e.g., Tibia, Femur, Coxa) and then use **Joints** to assemble them. Joints define how parts move relative to each other (e.g., a "Revolute" joint for a servo motor horn).

Before attending the first Mechanical sub-team workshop, please have Fusion 360 installed and try designing a simple 20x20x20mm cube with a 5mm hole through the center.
