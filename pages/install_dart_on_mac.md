---
title: Install DART on Mac
keywords: install, mac
last_updated: Feb 12, 2018
sidebar: home_sidebar
permalink: install_dart_on_mac.html
---

## Build Environments

### Supported Platforms

DART 6.3 has been tested to run on macOS High Sierra (10.13) with [clang](http://clang.llvm.org/) (Apple LLVM version 6.0).

### Getting Headers/Developer Tools

Mac OS does not ship with system headers and compiler tools by default; the easiest way to get it all is by installing Xcode through the app store.

Xcode is Apple's full-fledged development environment for Mac/iPhone/iPad apps, but can also be used for developing in a number of standard languages (C, C++, Ruby, web languages, etc.), so it's a great IDE to have installed anyway.

## Install using Homebrew

If you want to use DART as a dependent library for your development, then installing DART using [Homebrew](http://brew.sh/) is the most convenient way. If you found any difficulties in installing DART using Homebrew, please [open an issue](https://github.com/dartsim/homebrew-dart/issues/new).

### Clean up

{% include note.html content="If you're going to install Homebrew as a first time, then please skip this step." %}

Make sure that Homebrew is healthy before you go to next steps with:

```bash
$ brew update
$ brew cleanup
$ brew doctor
```

### Install Homebrew

You can find the install command in [Homebrew's website](http://brew.sh/). It should look something like:

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install DART 6

Now you can install DART with the following command:

```bash
$ brew install dartsim
```

* If you want to see the detailed information of the formula

  ```bash
  $ brew info dartsim
  ```

## Install from Source using Homebrew

First, install Homebrew by following [the previous instruction](https://github.com/dartsim/dart/wiki/Mac%20Installation%20for%20DART%206#install-homebrew).

### Dependencies

#### Install All the Required and Optional Dependencies

```bash
$ brew install dartsim --only-dependencies
```

#### Install Dependencies Individually

##### Install Required Dependencies

```bash
$ brew install eigen
$ brew install assimp
$ brew install libccd
$ brew install fcl
$ brew install boost
$ brew install open-scene-graph
```

{% include note.html content="`open-scene-graph` is not an actual required dependency for building the core component of DART, but it's necessary to build [OpenSceneGraph based examples](http://dartsim.github.io/gallery.html#openscenegraph-based-examples)." %}

##### Install Optional Dependencies

* Bullet Collision Detector Support

  To use bullet's collision detection routine, bullet is needed.

  ```
  $ brew install bullet
  ```

* NLopt Optimization Support

  ```
  $ brew install nlopt
  ```

* IPopt Optimization Support

  ```
  $ brew install dartsim/dart/ipopt
  ```

* DART Planning Module

  ```
  $ brew install flann
  ```

* DART Parsers: SKEL, URDF, SDF, VSK

  ```
  $ brew install tinyxml
  $ brew install tinyxml2
  $ brew install urdfdom
  ```

* OpenSceneGraph GUI
  {% include note.html content="If you're going to build OpenSceneGraph based examples, then please install OpenSceneGraph." %}
  ```
  $ brew install open-scene-graph
  ```

### Build and Install DART

After this you should be able to clone the DART repository and compile it.

1.  Clone the repository into a directory in your home folder:

    ```
    $ git clone git://github.com/dartsim/dart.git
    ```

1.  Change directory to the DART repository and checkout the latest tag of DART 6, `v6.3.0`:

    ```
    $ cd dart
    $ git checkout tags/v6.3.0
    ```

1.  Create a build directory:

    ```
    $ mkdir build
    $ cd build
    ```

1.  Configure and build dart:

    ```
    $ cmake ..
    $ make -j4
    ```

    * Build Options

      * Build systems

        If you want to use Xcode to build DART, use cmake's generator option:

        ```
        $ cmake .. -G Xcode
        ```

        You can find the list of generators you can use with `cmake --help`.

      * Build types

        You can specify the build type \[ Debug \| Release \| RelWithDebInfo \| Profile \] as:

        ```
        $ cmake .. -DCMAKE_BUILD_TYPE=Debug
        ```

        The default build type is `Release`.

      * DART tests, tutorials, examples

        If you want to build the tests, tutorials, or examples:

        ```
        $ make -j4 tests
        $ make -j4 tutorials
        $ make -j4 examples
        ```

1.  Install DART:

    ```
    $ sudo make install
    ```
    
    If you want to uninstall DART, then:

    ```
    $ sudo make uninstall
    ```

