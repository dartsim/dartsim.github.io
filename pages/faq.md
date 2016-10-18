---
title: FAQ
permalink: faq.html
sidebar: home_sidebar
keywords: frequently asked questions, FAQ, question and answer, collapsible sections, expand, collapse
last_updated: November 30, 2015
---

### How to use DART through Gazebo?

In order to use DART, a full compilation of [Gazebo](http://www.gazebosim.org/) from source is needed. The install instruction can be found in [Gazebo website](http://gazebosim.org/tutorials?tut=install_from_source&ver=4.0&cat=install). Once gazebo is built from source and installed, we can run Gazebo with DART engine in two ways:

* Specify DART as physics engine when run gazebo:

  ```
  gazebo -e dart
  ```

* Load a world ([SDFormat](http://sdformat.org/)) file specified DART as physics engine:

  ```xml
  [dart_example.world]
  <?xml version="1.0"?>
  <sdf version="1.5">
    <world name="fluid_world">
      <physics type="dart">
        ...
      </physics>
  ```

  ```
  gazebo worlds/dart_example.world
  ```

