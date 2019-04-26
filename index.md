---
keywords: home introduction
sidebar: mydoc_sidebar
permalink: index.html
toc: false
---

{% include image.html file="dart_logo_big.jpg" alt="DART Logo" max-width="320"  caption="" %}


## Introduction

DART (Dynamic Animation and Robotics Toolkit) is a collaborative, cross-platform, open source library created by the [Graphics Lab](http://www.cc.gatech.edu/~karenliu/Home.html) and [Humanoid Robotics Lab](http://www.golems.org/) at [Georgia Institute of Technology](http://www.gatech.edu/) with ongoing contributions from the [Personal Robotics Lab](http://personalrobotics.cs.washington.edu/) at [University of Washington](http://www.washington.edu/) and [Open Source Robotics Foundation](https://www.osrfoundation.org/). The library provides data structures and algorithms for kinematic and dynamic applications in robotics and computer animation. DART is distinguished by its accuracy and stability due to its use of generalized coordinates to represent articulated rigid body systems and Featherstone’s Articulated Body Algorithm to compute the dynamics of motion. For developers, in contrast to many popular physics engines which view the simulator as a black box, DART gives full access to internal kinematic and dynamic quantities, such as the mass matrix, Coriolis and centrifugal forces, transformation matrices and their derivatives. DART also provides an efficient computation of Jacobian matrices for arbitrary body points and coordinate frames. The frame semantics of DART allows users to define arbitrary reference frames (both inertial and non-inertial) and use those frames to specify or request data. For air-tight code safety, forward kinematics and dynamics values are updated automatically through lazy evaluation, making DART suitable for real-time controllers. In addition, DART provides flexibility to extend the API for embedding user-provided classes into DART data structures. Contacts and collisions are handled using an implicit time-stepping, velocity-based LCP (linear complementarity problem) to guarantee non-penetration, directional friction, and approximated Coulomb friction cone conditions. DART has applications in robotics and computer animation because it features a multibody dynamic simulator and various kinematic tools for control and motion planning.

## Features

### General

* Open source under BSD license written in C++.
* Support multiple platforms: Ubuntu, Archlinux, FreeBSD, macOS, and Windows.
* Fully integrated with Gazebo.
* Support models described in URDF and SDF formats.
* Provide default integration methods, semi-implicit Euler and RK4, as well as extensible
* API for other numerical integration methods.
* Support multiple collision detectors: FCL, Bullet, and ODE.
* Support lazy evaluation and automatic update of kinematic and dynamic quantities.
* Provide extensible API for embedding user-provided classes into DART data structures.
* Support comprehensive recording of events in simulation history.
* Support OpenGL and OpenSceneGraph.
* Provide extensible API to interface with various optimization methods.

### Kinematics

* Support numerous types of Joint.
* Support numerous primitive and arbitrary body shapes with customizable inertial and material properties.
* Support flexible skeleton modeling: cloning and reconfiguring skeletons or subsections of a skeleton.
* Provide comprehensive access to kinematic states (e.g. transformation, position, velocity, or acceleration) of arbitrary entity and coordinate frames
* Provide comprehensive access to various Jacobian matrices and their derivatives.
* Support flexible conversion of coordinate frames.
* A fully modular inverses kinematics framework.
* A plug-and-play hierarchical whole-body inverse kinematics solver.
* Provide analytic inverse kinematics interface with ikfast support.

### Dynamics

* Achieve high performance for articulated dynamic systems using Lie Group representation and Featherstone hybrid algorithms.
* Enforce joints between body nodes exactly using generalized coordinates.
* Provide comprehensive API for dynamic quantities and their derivatives, such as mass matrix, Coriolis force, gravitational force, other external and internal forces.
* Support both rigid and soft body nodes.
* Model viscoelastic joint dynamics with joint friction and hard joint limits.
* Support various types of actuators.
* Handle contacts and collisions using an implicit LCP to guarantee non-penetration, directional friction, and approximated Coulomb friction cone conditions.
* Support ”Island” technique to subdivide constraint handling for efficient performance.
* Support various Cartesian constraints and provide extensible API for user-defined constraints.
* Provide multiple constraint solvers: Lemke method, Dantzig method, and PSG method.
* Support dynamic systems with closed-loop structures.
