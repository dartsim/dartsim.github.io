---
title: Install DART on Ubuntu
keywords: install, ubuntu
last_updated: Jan 10, 2019
sidebar: home_sidebar
permalink: install_dart_on_ubuntu.html
---

## Build Environments

### Supported Platforms

DART 6.6 supports Ubuntu 32 and 64 bit **14.04 LTS (Trusty)**, **16.04 (Xenial)**, **18.04 (Bionic)**, and **18.10 (Cosmic)** systems.

## Install DART using Ubuntu packages

If you want to use dart as a dependent library for your development, then installing dart using Ubuntu packages is the most convenient way.

### Adding [Personal Package Archives (PPA's) for DART and dependencies](https://launchpad.net/~dartsim/+archive/ubuntu/ppa)

DART 6.6 Debian packages are provided for 14.04 LTS (Trusty), 16.04 (Xenial), 18.04 (Bionic), and 18.10 (Cosmic).

* Trusty

  ```
  sudo apt-add-repository ppa:libccd-debs/ppa
  sudo apt-add-repository ppa:fcl-debs/ppa
  sudo apt-add-repository ppa:dartsim/ppa
  sudo apt-get update
  ```

* Xenial, Bionic, and Cosmic

  ```
  sudo apt-add-repository ppa:dartsim/ppa
  sudo apt-get update  # not necessary for Bionic
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
sudo apt-get install libopenscenegraph-dev
```

{% include note.html content="`libopenscenegraph-dev` is not an actual required dependency for building the core component of DART, but it's necessary to build [OpenSceneGraph based examples](http://dartsim.github.io/gallery.html#openscenegraph-based-examples)." %}

### Install Optional Dependencies

* NLopt Optimization Support

  * Trusty, Xenial, and Bionic
  
    ```
    sudo apt-get install libnlopt-dev
    ```
  
  * Cosmic
  
    ```
    sudo apt-get install libnlopt-cxx-dev
    ```

* IPopt Optimization Support

  ```
  sudo apt-get install coinor-libipopt-dev
  ```

* Bullet Collision Detector Support

  ```
  sudo apt-get install libbullet-dev
  ```

* ODE Collision Detector Support

  ```
  sudo apt-get install libode-dev
  ```

* VoxelGridShape
  ```
  sudo apt-get install liboctomap-dev
  ```

* DART Planning Module

  ```
  sudo apt-get install libflann-dev
  ```

* DART Parsers: SKEL, URDF, SDF, VSK

  ```
  sudo apt-get install libtinyxml2-dev
  sudo apt-get install liburdfdom-dev
  ```

* GLUT GUI

  ```
  sudo apt-get install libxi-dev libxmu-dev freeglut3-dev
  ```

* OpenSceneGraph GUI

  {% include note.html content="If you're going to build OpenSceneGraph based examples, then please install OpenSceneGraph." %}

  ```
  sudo apt-get install libopenscenegraph-dev
  ```

### Build and Install DART

1.  Clone the repository into a directory in your home folder:

    ```
    git clone git://github.com/dartsim/dart.git
    ```

2.  Change directory to the DART repository and checkout the latest tag of DART 6, `v6.6.1`:

    ```
    cd dart
    git checkout tags/v6.6.1
    ```

3.  Create a build directory:

    ```
    mkdir build
    cd build
    ```

4.  Configure and build DART:

    ```
    cmake ..
    make -j4
    ```

  * Build Options

    * DART tests, tutorials, examples

      If you want to build the tests, tutorials, or examples, run follows:

      ```
      make -j4 tests
      make -j4 tutorials
      make -j4 examples
      ```

      Once you successfully build the tests, you can run all the tests at once as:

      ```shell
      $ make -j4 test  # or cmake -j4
      ```

      or run a particular test as:

      ```shell
      $ ./unittests/<category_name>/<test_name>  # e.g., ./unittests/unit/test_Uri
      ```

      Also, you can run tutorials and examples as:

      ```shell
      $ ./bin/<executable_name>  # e.g., ./bin/rigidCubes
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

