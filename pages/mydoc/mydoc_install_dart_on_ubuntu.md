---
title: Install DART on Ubuntu
keywords: install, ubuntu
sidebar: mydoc_sidebar
permalink: mydoc_install_dart_on_ubuntu.html
folder: mydoc
---

## Build Environments

### Supported Platforms

We support Ubuntu 32 and 64 bit **14.04 LTS (trusty)**, **15.10 (wily)**, and **16.04 (xenial)** systems.


## Install DART using Ubuntu packages

If you want to use dart as a dependent library for your development, then installing dart using Ubuntu packages is the most convenient way. 

### Adding [Personal Package Archives (PPA's) for DART and dependencies](https://launchpad.net/~dartsim/+archive/ubuntu/ppa)

DART 6 Debian packages are provided for 14.04 LTS (trusty), 15.10 (wily), and 16.04 (xenial).

* trusty

  ```
  sudo apt-add-repository ppa:libccd-debs
  sudo apt-add-repository ppa:fcl-debs
  sudo apt-add-repository ppa:dartsim
  sudo apt-get update
  ```

* wily and xenial (and later)

  ```
  sudo apt-add-repository ppa:dartsim
  sudo apt-get update
  ```

### Install DART

* Install the core library

  ```
  sudo apt-get install libdart6-dev
  ```

* Install optional components

  e.g., installing planning component:

  ```
  sudo apt-get install libdart6-planning-dev
  ```

* Install everything

  ```
  sudo apt-get install libdart6-all-dev
  ```

## Install DART from source

### Install Required Dependencies

Make sure you have removed the DART packages:

```
sudo apt-get remove libdart*
```

Install required dependencies. A clean Ubuntu system will need:

```
sudo apt-get install build-essential cmake pkg-config git
sudo apt-get install libeigen3-dev libassimp-dev libccd-dev libfcl-dev libboost-regex-dev libboost-system-dev
```

### Install Optional Dependencies

* NLopt Optimization Support

  ```
  sudo apt-get install libnlopt-dev
  ```

* IPopt Optimization Support

  ```
  sudo apt-get install coinor-libipopt-dev
  ```

* Bullet Collision Detector Support

  ```
sudo apt-get install libbullet-dev
  ```

* DART Planning Module

  ```
  sudo apt-get install libflann-dev
  ```

* DART Parsers: SKEL, URDF, SDF, VSK

  ```
  sudo apt-get install libtinyxml-dev libtinyxml2-dev
  sudo apt-get install liburdfdom-dev liburdfdom-headers-dev
  ```

* GLUT GUI

  ```
  sudo apt-get install libxi-dev libxmu-dev freeglut3-dev
  ```

* OpenSceneGraph GUI

  ```
  sudo apt-get install libopenscenegraph-dev
  ```

### Build and Install DART

1.  Clone the repository into a directory in your home folder:

    ```
    git clone git://github.com/dartsim/dart.git
    ```

1.  Change directory to the DART repository and checkout the latest tag of DART 6, `v6.0.1`:

    ```
    cd dart
    git checkout tags/v6.0.1
    ```

1.  Create a build directory:

    ```
    mkdir build
    cd build
    ```

1.  Configure and build dart:

    ```
    cmake ..
    make -j4
    ```

  * Build Options

    * DART tests, tutorials, examples

      If you want to build the tests, tutorials, or examples:

      ```
      make -j4 tests
      make -j4 tutorials
      make -j4 examples
      ```

  * Build Type

    You can specify the build type \[ Debug \| Release \| RelWithDebInfo \| Profile \] as:

    ```
    cmake .. -DCMAKE_BUILD_TYPE=Debug
    ```

    The default build type is `Release`.

1.  Install DART:
    
    ```
    sudo make install
    ```
    
    If you want to uninstall DART, then:

    ```
    sudo make uninstall
    ```

