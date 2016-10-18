---
title: DART Gallery
keywords: 
tags: [getting_started]
sidebar: home_sidebar
permalink: gallery.html
---

## OpenSceneGraph based Examples

### Atlas Simbicon

The *Atlas Simbicon* demo simulates [Atlas](http://www.bostondynamics.com/robot_Atlas.html) humanoid robot controlled by [Simbicon](http://www.cs.ubc.ca/~van/papers/Simbicon.htm), which is a simple biped locomotion controller. This demo is a fully 3D simulation with articulated dynamics and rigid body collisions. This demo uses OpenSceneGraph for 3D rendering and ImGui for 2D on-screen buttons. The source code can be found in the [examples/osg/osgAtlasSimbicon](https://github.com/dartsim/dart/tree/release-6.1/examples/osg/osgAtlasSimbicon) directory.

The controller has three control modes: 'No Control', 'Short-Stride Walking', and 'Normal-Stride Walking'. The Atlas robot can walk keeping its balance with disturbances. You can apply external forces to the torso using the keyboard:
- 'A' Key: push forward the torso of Atlas
- 'S' Key: push backward the torso of Atlas
- 'D' Key: push left the torso of Atlas
- 'F' Key: push right the torso of Atlas

<span class="label label-default">Reset Atlas</span> button is for recovering the robot to the initial location and initial pose, which is useful when it's fallen or bungee-jumped out of the ground.

Gravity can be varied using the slider at the 2D GUI.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve_MRMTvGX8" frameborder="0" allowfullscreen></iframe>

### Tinkertoy

The *tinkertoy* demo simulates trees of *tinkertoys*, which are blocks connected to each other via various joint types. This is a fully 3D simulation with articulated dynamics and rigid body collisions. This demo uses OpenSceneGraph for 3D rendering and ImGui for 2D on-screen buttons. The source code can be found in the [examples/osg/osgTinkertoy](https://github.com/dartsim/dart/tree/release-6.1/examples/osg/osgTinkertoy) directory.

The scene starts out with two trees of *tinkertoys*. Left-click on one of the blocks to attach a target to it. During simulation, the block that is attached to the target will be pulled towards the target with a spring-like force. Move the target around by clicking on its handles to change the direction of the force.

When simulation is paused, the user can change the structure of the tinkertoy by adding and removing blocks. Click on:

- <span class="label label-default">Add a Weld-Joint Block</span>
- <span class="label label-default">Add a Revolute-Joint Block</span>
- <span class="label label-default">Add a Ball-Joint Block</span>

to add a block with the specified joint type at the current target location. The new block will be attached to whichever block the target is currently attached to. You can use the <span class="label label-default">Reset Target</span> button to detach the target from all blocks, allowing you to construct a new tinkertoy tree. The new block will run along the x-axis (red arrow) of the target. For revolute joints, the joint axis will align with the target's z-axis (blue arrow).

Gravity can be toggled from the 2D GUI or by pressing the `G` key.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FiKtZWShv2M" frameborder="0" allowfullscreen></iframe>

## Examples on [Gazebo](http://www.gazebosim.org/)

The non-profit organization, [OSRF (Open Source Robotic Foundation)](http://www.osrfoundation.org/), conducted a [performance comparison](https://vimeo.com/105584932) (first video) on four physics engines: [ODE](http://www.ode.org/), [Bullet](http://bulletphysics.org/), [DART](http://dartsim.github.io/), and [SimBody](https://simtk.org/projects/simbody) ([ROSCon 2014](http://www.osrfoundation.org/wordpress2/wp-content/uploads/2015/04/roscon2014_scpeters.pdf)). An [Atlas robot](http://www.bostondynamics.com/robot_Atlas.html) was simulated using each of the physics engines to determine the highest RTF that results in stable walking motion. RTF (real-time factor) is a metric to measure the speed of the physics engine. RTF < 1 means slower than real time and RTF > 1 means faster than real time. DART achieved 1.6-1.9 RTF, faster than ODE (1.45), Bullet (0.15), and SimBody (0.1). The second [video](https://vimeo.com/84443645) shows that, despite the differences in performance, the motion trajectories simulated by different physics engines are qualitatively similar.

<iframe src="https://player.vimeo.com/video/105584932" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/105584932">Physics engine benchmark: robot walking on flat ground</a> from <a href="https://vimeo.com/user10437789">Steven Peters</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

<iframe src="https://player.vimeo.com/video/84443645" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/84443645">Gazebo Multi-Physics Engine Support</a> from <a href="https://vimeo.com/osrfoundation">OSRF</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

## OpenGL based Examples

{% include warning.html content="OpenGL based examples will be added soon." %}

