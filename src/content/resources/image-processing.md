---
title: "Image Processing"
description: "An introduction to computer vision using Python and OpenCV. Learn how to process streams, apply filters, and detect colors."
---

# Image Processing with OpenCV

Computer Vision gives robots the ability to "see" and interpret the world around them. OpenCV (Open Source Computer Vision Library) is the industry standard for this task.

## Setting Up

In Python, setting up OpenCV is incredibly simple:

```bash
pip install opencv-python
pip install numpy
```

## Core Concepts

### Reading and Displaying an Image

```python
import cv2

# Read the image
image = cv2.imread('robot.jpg')

# Display the image
cv2.imshow('Robot Vision', image)
cv2.waitKey(0) # Wait for a key press
cv2.destroyAllWindows()
```

### Color Space Filtering (HSV)

In autonomous robotics (like a ball-tracking rover), finding objects by color is foundational. Instead of RGB, we use the HSV (Hue, Saturation, Value) color space because it is much more robust against different lighting conditions.

```python
import cv2
import numpy as np

# Convert to HSV
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

# Define range for a color (e.g., Red)
lower_red = np.array([0, 120, 70])
upper_red = np.array([10, 255, 255])

# Threshold the HSV image to get only red colors
mask = cv2.inRange(hsv, lower_red, upper_red)

# Apply mask
res = cv2.bitwise_and(image, image, mask=mask)
```

By finding the contours within this mask, a robot can find the center coordinates of an object and steer toward it!
