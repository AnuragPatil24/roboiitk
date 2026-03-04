---
title: 'Computer Vision Roadmap'
date: '2024-03-04'
description: 'A comprehensive guide to learning Computer Vision'
tags: ['Computer Vision', 'OpenCV', 'Robotics']
---

## <a id="_ec0q2ihxehxi"></a>__Week 1: Image Processing & Fundamentals__

1. __Introduction to Computer Vision:__
	- [Computer Vision Video Playlist](https://youtube.com/playlist?list=PL8n4sZAL72DlyzGLD0wYE-hiYq2SDwk44&si=mQgIqPi-PcctfF2K)
	- Focus on Lecture 1 and Lecture 2 to cover the basics\. The lectures are heavy and long but exhaustive\. Feel free to skip the maths\-heavy parts during the first watch\.
2. __OpenCV Documentation:__
	- [OpenCV Python Documentation](https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html)
	- Use this for OpenCV installation, understanding core concepts, and implementing various image processing techniques\.

## <a id="_t88j18hiavmc"></a>__Week 2: Motion Analysis, Feature Matching & Camera Calibration__

1. __Motion Detection & Optical Flow:__
	- Implement frame differencing, background subtraction \(MOG2\), and optical flow for tracking moving objects\.
	- [Motion Detection Using OpenCV \- PyImageSearch](https://pyimagesearch.com/2015/05/25/basic-motion-detection-and-tracking-with-python-and-opencv/)
	- [Optical Flow in OpenCV \- LearnOpenCV](https://learnopencv.com/optical-flow-in-opencv/#what-is-optical-flow)
2. __Feature Detection & Matching:__
	-  Detect keypoints using SIFT, ORB, and FAST, then match them using Brute\-Force and FLANN\.
	- [Feature Detection in OpenCV \- OpenCV Docs](https://docs.opencv.org/3.4/d7/d66/tutorial_feature_detection.html)

__      5\.   Camera Calibration & Perspective Transformation__

- 
	- Perform camera calibration to remove distortion and use perspective transformation for navigation\.
	- [Camera Calibration with OpenCV \- OpenCV Docs](https://docs.opencv.org/4.x/d4/d94/tutorial_camera_calibration.html)
	- [Homography & Perspective Transformation \- OpenCV Docs](https://docs.opencv.org/4.x/d9/dab/tutorial_homography.html)

## <a id="_6x824n9jpbct"></a>__Week 3: Depth Perception, Object Detection & Visual SLAM__

__     6\. Stereo Vision & Depth Estimation:__

- 
	-  Use stereo vision to estimate object depth for obstacle avoidance\.
	- [Stereo Vision & Depth Maps \- OpenCV Docs](https://docs.opencv.org/3.4/dd/d53/tutorial_py_depthmap.html)

__      7\. Object Detection Using YOLO:__

- 
	-  Implement real\-time object detection using YOLOv8 for robotics applications\.
	- [YOLO Object Detection](https://pyimagesearch.com/2018/11/12/yolo-object-detection-with-opencv/)

__      8\.    Visual SLAM \(vSLAM\) & Localization:__

- 
	- Learn __Visual SLAM \(Simultaneous Localization and Mapping\)__ techniques for robot navigation\.
	- [ORB\-SLAM3: Open Source SLAM \- GitHub](https://github.com/UZ-SLAMLab/ORB_SLAM3)
	- [Understanding vSLAM](https://in.mathworks.com/help/vision/visual-simultaneous-localization-and-mapping-slam.html)

__      9\.   ROS 2 & OpenCV Integration:__

- 
	- Process robot camera images using ROS 2 and OpenCV \([cv\_bridge](https://wiki.ros.org/cv_bridge)\)\.
	- [ROS2 and OpenCV](https://temugeb.github.io/ros2/cv_bridge/cpp/python/2022/06/23/ros2-cv-bridge-minimal-pubisher.html) 

