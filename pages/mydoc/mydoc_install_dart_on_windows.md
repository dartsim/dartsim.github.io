---
title: Install DART on Windows
permalink: mydoc_install_dart_on_windows.html
keywords: jekyll on windows, pc, ruby, ruby dev kit
sidebar: mydoc_sidebar
folder: mydoc
---

{% include warning.html content="DART used to support Windows, but DART 6 can't be build with Visual Studio (including 2015) due to the lack of C++11 support of Visual Studio. (Issue [#753](https://github.com/dartsim/dart/issues/753) [#599](https://github.com/dartsim/dart/issues/599))" %}

## Supported Platforms and Compilers

Windows 7/10 32/64-bit, **Visual Studio 2015 32/64-bit with Update 3**. Please make sure that your Visual Studio is up to date.

## Prerequisites 

The installer provided below installs prerequisites for DART and sets the PATH environment variable.

**Visual Studio 2015**

* [DART-dependencies-msvc14-md-32bit.msi](https://github.com/dartsim/dart-prerequisites-windows-installers/raw/master/02/DART-dependencies-msvc14-md-32bit.msi)

The prerequisites installed by this installer are:

- Assimp
- Boost 1.58 (components: regex, systems)
- libccd
- Eigen
- FCL
- FLANN
- GLUT
- tinyxml
- tinyxml2
- urdfdom
- urdfdom_headers
- console_bridge

We recommend not changing the default install location (C:/Golems/).

### CMake

You will also need CMake to create the build environment for your system. Download CMake 3.1.3 or later for your system here:

http://www.cmake.org/cmake/resources/software.html

### nlopt (optional)

[Download](http://ab-initio.mit.edu/wiki/index.php/NLopt_on_Windows) precompiled 32-bit or 64-bit Windows DLL files and extract the zip file to a particular directory, e.g., C:/dart-prerequisites/. When you configure cmake, set `NLOPT_INCLUDE_DIRS` and `NLOPT_LIBRARY_DIRS` to the directory.

### TortoiseGit or SmartGit (optional)

To download the source code using GIT we recommend using [TortoiseGit](http://code.google.com/p/tortoisegit/wiki/Download) or [SmartGit](http://www.syntevo.com/smartgit/download).

## DART Source

### Using GIT

If you have a GIT client installed, clone [the DART repository](https://github.com/dartsim/dart.git). Checkout the tagged version with the highest version number. To do that, choose "Switch/Checkout..." from the TortoiseGit context menu. In the window that appears select the "Tags" option and choose the highest version number from the drop-down menu.

If you are developing DART or want to stay up-to-date with the most recent development (at the expense of using an untested version), just stay on the master branch instead of checking out a tagged version.

### Download as zip file

Go to [the tag page](https://github.com/dartsim/dart/tags) and download the source code for the highest version number. Unpack it.

### Generate Project Files

Run CMake (cmake-gui). Select the directory where you downloaded DART. Name a directory where you want the Visual Studio project files to be placed. You should probably place it under the DART directory, e. g. `[DART directory]\build`

Click "Configure" and choose your development environment (Visual Studio 14).

If you did not install the DART prerequisites in the default install location, you need to change `CMAKE_INSTALL_PREFIX` to your install location and click "Configure" again.

Click "Generate"

## Build and Install

The previous process should create Visual Studio project files. Open `[DART directory]\build\dart.sln`. Choose the "Release" configuration. Right click on the "INSTALL" project and choose "Build". This will build and install DART in `C:\Golems` or the install location you chose. Do the same for the "Debug" configuration.

