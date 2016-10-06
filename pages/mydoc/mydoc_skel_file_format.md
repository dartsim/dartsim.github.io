---
title: SKEL File Format
permalink: mydoc_skel_file_format.html
sidebar: mydoc_sidebar
folder: mydoc
---

# SKEL file format

SKEL file format is an XML format that describes characters, robots, and environments for DART. The basic structure is based on [SDF](http://sdformat.org/), and it also provides additional properties specialized to DART.

**Caution: this document is under development and buggy.**

## Hierarchy

```xml
<skel>
 +- <world>
 |   +- <physics>
 |       +- <time_step>
 |       +- <gravity>
 +- <skeleton>
     +- <transformation>
     +- <immobile>
     +- <body>
     |   +- <gravity>
     |   +- <self_collide>
     |   +- <transformation>
     |   +- <inertia>
     |   |   +- <mass>
     |   |   +- <transformation>
     |   |   +- <moment_of_inertia>
     |   |       +- <ixx>
     |   |       +- <iyy>
     |   |       +- <izz>
     |   |       +- <ixy>
     |   |       +- <ixz>
     |   |       +- <iyz>
     |   +- <visualization_shape>
     |   |   +- <transformation>
     |   |   +- <geometry>
     |   |       +- <box>
     |   |       |   +- <size>
     |   |       +- <ellipsoid>
     |   |       |   +- <size>
     |   |       +- <cylinder>
     |   |           +- <radius>
     |   |           +- <height>
     |   +- <collision_shape>
     |       +- <transformation>
     |       +- <geometry>
     |       |   +- <box>
     |       |   |   +- <size>
     |       |   +- <ellipsoid>
     |       |   |   +- <size>
     |       |   +- <cylinder>
     |       |       +- <radius>
     |       |       +- <length>
     |       +- <collidable>
     +- <joint>
         +- <parent>
         +- <child>
         +- <axis>
         |   +- <xyz>
         |   +- <dynamics>
         |       +- <damping>
         |       +- <friction>
         |       +- <spring_rest_position>
         |       +- <spring_stiffness>
         |   +- <limit>
         |       +- <lower>
         |       +- <upper>
         +- <axis2>
         |   +- <xyz>
         |   +- <dynamics>
         |       +- <damping>
         |       +- <friction>
         |       +- <spring_rest_position>
         |       +- <spring_stiffness>
         |   +- <limit>
         |       +- <lower>
         |       +- <upper>
         +- <axis3>
         |   +- <xyz>
         |   +- <dynamics>
         |       +- <damping>
         |       +- <friction>
         |       +- <spring_rest_position>
         |       +- <spring_stiffness>
         |   +- <limit>
         |       +- <lower>
         |       +- <upper>
         +- <init_pos>
         +- <init_vel>
         +- <axis_order>
         +- <plane>
             +- <translation_axis1>
                 +- <xyz>
             +- <translation_axis2>
                 +- <xyz>
```

## Details

```xml
<skel>
    Description:
    Required: 1
    Type: n/a
    Attributes:
        version: Version number of the skel format
            Type: string
            Default: 1.0
    <world>
        Description:
        Required: 1
        Type: n/a
        Attributes:
            name: Unique name of the world.
                Type: string
                Default: "Unknown world"
        <physics>
            Description: Thy physics properties.
            Requried: 0
            Type: n/a
            <time_step>
                Description:
                Required: 0
                Type: double
                Default: 0.001
            <gravity>
                Description: The gravity vector.
                Required: 1
                Type: vector3
                Default: 0 0 -9.8
        <skeleton>
            Description:
            Required: +0
            Type: n/a
            Attributes:
                name: A unique name for the skeleton.
                    Type: string
                    Default: "Unknown skeleton"
            <immobile>
                Description:
                Required: 0
                Type: bool
                Default: 0
            <transformation>
                Description:
                Required: 0
                Type: First three elements are translation and last three elements are XYZ-Euler angles.
                Default: 0 0 0 0 0 0
            <body>
                Description: We assume that the first body is the root body
                Required: +1
                Type: n/a
                    Attributes:
                        name: A unique name for the body within the scope of the skeleton
                            Type: string
                            Default: "Unknown body"
                <gravity>
                    Description: If true, the body is affected by gravity.
                    Requried: 0
                    Type: bool
                    Default: 1
#                <self_collide>
#                    Description: If true, the body can collide with other bodies in the skeleton.
#                    Required: 0
#                    Type: bool
#                    Default: 1
                <transformation>
                    Description: This is the transformation of the body reference frame, relative to the skeleton reference frame.
                    Required: 0
                    Type: First three elements are translation and last three elements are XYZ-Euler angles.
                    Default: 0 0 0 0 0 0
                <inertia>
                    Description: The inertia of the body.
                    Required: 0
                    Type: n/a
                    <mass>
                        Description: The mass of the body.
                        Required: 0
                        Type: double
                        Default: 1
                    <offset>
                        Description: This is the offset of the inertia reference frame, relative to the body reference frame.
                        Required: 0
                        Type: Vector3d
                        Default: 0 0 0
                    <moment_of_inertia>
                        Description: The moment of inertia.
                        Required: 0
                        Type: n/a
                        <ixx>
                            Description: none
                            Required: 1
                            Type: double
                            Default: 1
                        <iyy>
                            Description: none
                            Required: 1
                            Type: double
                            Default: 1
                        <izz>
                            Description: none
                            Required: 1
                            Type: double
                            Default: 1
                        <ixy>
                            Description: none
                            Required: 1
                            Type: double
                            Default: 0
                        <ixz>
                            Description: none
                            Required: 1
                            Type: double
                            Default: 0
                        <iyz>
                            Description: none
                            Required: 1
                            Type: double
                            Default: 0
                <visualization_shape>
                    Description: none
                    Required: +1
                    Type: n/a
                    <transformation>
                        Description:
                        Required: 0
                        Type: Type: First three elements are translation and last three elements are XYZ-Euler angles.
                        Default: 0 0 0 0 0 0
                    <geometry>
                        Description: The shape of the visual.
                        Required: 1
                        Type: n/a
                        <box>
                            Description: Box shape
                            Required: 0
                            Type: n/a
                            <size>
                                Description:
                                Required: 0
                                Type: Vector3d
                                Default: 1 1 1
                        <ellipsoid>
                            Description:
                            Required: 0
                            Type: n/a
                            <size>
                                Description:
                                Required: 0
                                Type: Vector3d
                                Default: 1 1 1
                        <cylinder>
                            Description:
                            Required: 0
                            Type: n/a
                            <radius>
                                Description:
                                Required: 0
                                Type: double
                                Default: 0.5
                            <height>
                                Description:
                                Required: 0
                                Type: double
                                Default: 1
                    <collidable>
                        Description: This shape will collide with other collision shape nodes if true. This value can be on/off anytime.
                        Required: 0
                        Type: bool
                        Default: 1 (true)
                <collision_shape>
                    Description: none
                    Required: +1
                    Type: n/a
                    <transformation>
                        Description:
                        Required: 0
                        Type: Type: First three elements are translation and last three elements are XYZ-Euler angles.
                        Default: 0 0 0 0 0 0
                    <geometry>
                        Description: The shape of the visual.
                        Required: 1
                        Type: n/a
                        <box>
                            Description: Box shape
                            Required: 0
                            Type: n/a
                            <size>
                                Description:
                                Required: 0
                                Type: Vector3d
                                Default: 1 1 1
                        <ellipsoid>
                            Description:
                            Required: 0
                            Type: n/a
                            <size>
                                Description:
                                Required: 0
                                Type: Vector3d
                                Default: 1 1 1
                        <cylinder>
                            Description:
                            Required: 0
                            Type: n/a
                            <radius>
                                Description:
                                Required: 0
                                Type: double
                                Default: 0.5
                            <height>
                                Description:
                                Required: 0
                                Type: double
                                Default: 1
            <joint>
                Description: A joint connections two bodies with kinematic and dynamic properties.
                Requried: +0
                Type: n/a
                Attributes:
                    name: A unique name ofr the joint within the scope of the skeleton.
                        Type: string
                        Default:
                    type: The type of joint, which must be one of the following: (revolute) a hinge joint that rotates on a single axis
                        Type: string
                        Default:
                    actuator: The actuator type of joint, which must be one of the following: "torque"/"passive"/"acceleration"/"velocity"/"locked"
                        Type: string
                        Default: "torque"
                <parent>
                    Description: Name of the parent body
                    Required: 1
                    Type: string
                    Default:
                <child>
                    Description: Name of the child body
                    Required: 1
                    Type: string
                    Default:
                <transformation>
                    Description: Transformation from child link frame to joint frame.
                    Required: 0
                    Type: Type: First three elements are translation and last three elements are XYZ-Euler angles.
                    Default: 0 0 0 0 0 0
                <axis>
                    Description: The joint axis specified in the joint frame.
                    Required: 1
                    Type: n/a
                    <xyz>
                        Description: Represents the xyz components of a vector. The vector should be normalized.
                        Required: 1
                        Type: Vector3d
                        Default: 1 0 0
                    <dynamics>
                        Description: An element specifying physical properties of the joint. These values are used to specify modeling properties of the joint, particularly useful for simulation.
                        Required: 0
                        Type: n/a
                        Default: n/a
                        <damping>
                            Description: The physical velocity dependent viscous damping coefficient of the joint.
                            Required: 0
                            Type: double
                            Default: 0
                        <friction>
                            Description: The physical Coulomb friction force (not impulse) of the joint.
                            Required: 0
                            Type: double
                            Default: 0
                        <sprint_rest_position>
                            Description: The spring rest position for this joint axis.
                            Required: 0
                            Type: double
                            Default: 0
                        <sprint_stiffness>
                            Description: The spring stiffness for this joint axis.
                            Required: 0
                            Type: double
                            Default: 0
                    <limit>
                        Description: specifies the limits of this joint
                        Required: 1
                        Type: n/a
                        <lower>
                            Description: An attribute specifying the lower joint limit (radians for revolute joints, meters for prismatic joints).
                            Required: 1
                            Type: double
                            Default: -inf
                        <upper>
                            Description: An attribute specifying the upper joint limit (radians for revolute joints, meters for prismatic joints).
                            Required: 1
                            Type: double
                            Default: inf
                        <effort>
                            ...
                        <velocity>
                            ...
                <axis2>
                    Description: The joint axis specified in the joint frame.
                    Required: 0
                    Type: n/a
                    <xyz>
                        Description: Represents the xyz components of a vector. The vector should be normalized.
                        Required: 1
                        Type: Vector3d
                        Default: 1 0 0
                    <dynamics>
                        Description: An element specifying physical properties of the joint. These values are used to specify modeling properties of the joint, particularly useful for simulation.
                        Required: 0
                        Type: n/a
                        Default: n/a
                        <damping>
                            Description: The physical velocity dependent viscous damping coefficient of the joint.
                            Required: 0
                            Type: double
                            Default: 0
                        <friction>
                            Description: The physical Coulomb friction force (not impulse) of the joint.
                            Required: 0
                            Type: double
                            Default: 0
                        <sprint_rest_position>
                            Description: The spring rest position for this joint axis.
                            Required: 0
                            Type: double
                            Default: 0
                        <sprint_stiffness>
                            Description: The spring stiffness for this joint axis.
                            Required: 0
                            Type: double
                            Default: 0
                    <limit>
                        Description: specifies the limits of this joint
                        Required: 1
                        Type: n/a
                        <lower>
                            Description: An attribute specifying the lower joint limit (radians for revolute joints, meters for prismatic joints).
                            Required: 1
                            Type: double
                            Default: -inf
                        <upper>
                            Description: An attribute specifying the upper joint limit (radians for revolute joints, meters for prismatic joints).
                            Required: 1
                            Type: double
                            Default: inf
                        <effort>
                            ...
                        <velocity>
                            ...
                <axis3>
                    Description: The joint axis specified in the joint frame.
                    Required: 0
                    Type: n/a
                    <xyz>
                        Description: Represents the xyz components of a vector. The vector should be normalized.
                        Required: 1
                        Type: Vector3d
                        Default: 1 0 0
                    <dynamics>
                        Description: An element specifying physical properties of the joint. These values are used to specify modeling properties of the joint, particularly useful for simulation.
                        Required: 0
                        Type: n/a
                        Default: n/a
                        <damping>
                            Description: The physical velocity dependent viscous damping coefficient of the joint.
                            Required: 0
                            Type: double
                            Default: 0
                        <friction>
                            Description: The physical Coulomb friction force (not impulse) of the joint.
                            Required: 0
                            Type: double
                            Default: 0
                        <sprint_rest_position>
                            Description: The spring rest position for this joint axis.
                            Required: 0
                            Type: double
                            Default: 0
                        <sprint_stiffness>
                            Description: The spring stiffness for this joint axis.
                            Required: 0
                            Type: double
                            Default: 0
                    <limit>
                        Description: specifies the limits of this joint
                        Required: 1
                        Type: n/a
                        <lower>
                            Description: An attribute specifying the lower joint limit (radians for revolute joints, meters for prismatic joints).
                            Required: 1
                            Type: double
                            Default: -inf
                        <upper>
                            Description: An attribute specifying the upper joint limit (radians for revolute joints, meters for prismatic joints).
                            Required: 1
                            Type: double
                            Default: inf
                        <effort>
                            ...
                        <velocity>
                            ...
                <init_pos>
                    Description: Initial joint position
                    Required: 0
                    Type: VectorXd. The X depends on the degrees of freedom of the joint.
                <init_vel>
                    Description: Initial joint velocity
                    Required: 0
                    Type: VectorXd. The X depends on the degrees of freedom of the joint.
                <axis_order>
                    Description: Axis order for euler joint
                    Required: 0
                    Type: string
                    Default: xyz
                <plane>
                    Description: Plane information for planar joint
                    Required: 0
                    Type: string
                    Default: xyz
                    Attributes:
                        type: The type of plane, which must be one of the following: xy, yz, zx, arbitrary. If the type if arbitrary, <translation_axis1> and <translation_axis2> should must be specified.
                            Type: string
                            Default: xy
                    <translation_axis1>
                        Description: First translational axis of planar joint
                        Required: 1
                        Type: n/a
                        <xyz>
                            Description: Represents the xyz components of a vector. The vector should be normalized.
                            Required: 1
                            Type: Vector3d
                            Default: 1 0 0
                    <translation_axis2>
                        Description: Second translational axis of planar joint
                        Required: 1
                        Type: n/a
                        <xyz>
                            Description: Represents the xyz components of a vector. The vector should be normalized.
                            Required: 1
                            Type: Vector3d
                            Default: 0 1 0
```

