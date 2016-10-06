---
title: DART Gallery
keywords: 
tags: [getting_started]
sidebar: mydoc_sidebar
permalink: mydoc_gallery.html
folder: mydoc
---

## OpenSceneGraph based Examples

### Atlas Simbicon

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve_MRMTvGX8" frameborder="0" allowfullscreen></iframe>

* [Source code](https://github.com/dartsim/dart/tree/oss_challenge/examples/osg/osgAtlasSimbicon)

### Tinkertoy

<iframe width="560" height="315" src="https://www.youtube.com/embed/FiKtZWShv2M" frameborder="0" allowfullscreen></iframe>

* [Source code](https://github.com/dartsim/dart/tree/oss_challenge/examples/osg/osgTinkertoy)

## Examples on [Gazebo](http://www.gazebosim.org/)

The non-profit organization, [OSRF (Open Source Robotic Foundation)](http://www.osrfoundation.org/), conducted a [performance comparison](https://vimeo.com/105584932) (first video) on four physics engines: [ODE](http://www.ode.org/), [Bullet](http://bulletphysics.org/), [DART](http://dartsim.github.io/), and [SimBody](https://simtk.org/projects/simbody) ([ROSCon 2014](http://www.osrfoundation.org/wordpress2/wp-content/uploads/2015/04/roscon2014_scpeters.pdf)). An [Atlas robot](http://www.bostondynamics.com/robot_Atlas.html) was simulated using each of the physics engines to determine the highest RTF that results in stable walking motion. RTF (real-time factor) is a metric to measure the speed of the physics engine. RTF < 1 means slower than real time and RTF > 1 means faster than real time. DART achieved 1.6-1.9 RTF, faster than ODE (1.45), Bullet (0.15), and SimBody (0.1). The second [video](https://vimeo.com/84443645) shows that, despite the differences in performance, the motion trajectories simulated by different physics engines are qualitatively similar.

<iframe src="https://player.vimeo.com/video/105584932" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/105584932">Physics engine benchmark: robot walking on flat ground</a> from <a href="https://vimeo.com/user10437789">Steven Peters</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

<iframe src="https://player.vimeo.com/video/84443645" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/84443645">Gazebo Multi-Physics Engine Support</a> from <a href="https://vimeo.com/osrfoundation">OSRF</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

## OpenGL based Examples

{% include warning.html content="OpenGL based examples will be added soon." %}

