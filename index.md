---
keywords: home introduction
sidebar: mydoc_sidebar
permalink: index.html
toc: false
---

{% include image.html file="dart_logo_big.jpg" alt="DART Logo" max-width="320"  caption="" %}


## Introduction

DART (Dynamic Animation and Robotics Toolkit) is a collaborative, cross-platform, open-source library developed by the [Graphics Lab](http://www.cc.gatech.edu/~karenliu/Home.html) and [Humanoid Robotics Lab](http://www.golems.org/) at the [Georgia Institute of Technology](http://www.gatech.edu/), with ongoing contributions from the [Personal Robotics Lab](http://personalrobotics.cs.washington.edu/) at the [University of Washington](http://www.washington.edu/) and the [Open Source Robotics Foundation](https://www.osrfoundation.org/). It provides data structures and algorithms for kinematic and dynamic applications in robotics and computer animation. DART stands out due to its accuracy and stability, which are achieved through the use of generalized coordinates to represent articulated rigid body systems and the application of Featherstone's Articulated Body Algorithm to compute motion dynamics.

For developers, DART offers full access to internal kinematic and dynamic quantities, such as the mass matrix, Coriolis and centrifugal forces, transformation matrices, and their derivatives, unlike many popular physics engines that treat the simulator as a black box. It also provides efficient computation of Jacobian matrices for arbitrary body points and coordinate frames. The frame semantics of DART allow users to define and use arbitrary reference frames (both inertial and non-inertial) to specify or request data.

DART is suitable for real-time controllers due to its lazy evaluation, which automatically updates forward kinematics and dynamics values to ensure code safety. It also allows for the extension of the API to embed user-provided classes into DART data structures. Contacts and collisions are handled using an implicit time-stepping, velocity-based linear complementarity problem (LCP) to guarantee non-penetration, directional friction, and approximated Coulomb friction cone conditions.

In summary, DART has applications in robotics and computer animation as it features a multibody dynamic simulator and various kinematic tools for control and motion planning.

## Features

### General

* Open source under BSD license written in C++.
* Support multiple platforms: Ubuntu, Archlinux, FreeBSD, macOS, and Windows.
* Fully integrated with Gazebo.
* Support models described in URDF and SDF formats.
* Provide default integration methods, semi-implicit Euler and RK4, as well as extensible
* API for other numerical integration methods.
* Support lazy evaluation and automatic update of kinematic and dynamic quantities.
* Provide extensible API for embedding user-provided classes into DART data structures.
* Support comprehensive recording of events in simulation history.
* Provide 3D visualization API using OpenGL and OpenSceneGraph with ImGui support.
* Provide extensible API to interface with various optimization problems such as nonlinear programming and multi-objective optimization.

### Collision Detection

* Support multiple collision detectors: FCL, Bullet, and ODE.
* Support various collision shapes including primitive shapes, concave mesh, and probablistic voxel grid.
* Support minimum distance computation.

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
