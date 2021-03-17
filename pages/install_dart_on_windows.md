---
title: Install DART on Windows
permalink: install_dart_on_windows.html
keywords: jekyll on windows, pc, ruby, ruby dev kit
last_updated: Mar 26, 2018
sidebar: home_sidebar
---

{% include warning.html content="Using DART on Windows is still experimental; It hasn't been fully tested." %}

## Supported Platforms and Compilers

Windows 10 64-bit, **Visual Studio 2019 64-bit**. Please make sure that your Visual Studio is up to date.

## Install DART from Source

### Install Dependencies using [vcpkg](https://vcpkg.readthedocs.io/en/latest/)

#### Install vcpkg

Please find vcpkg installation instruction from the [website](https://vcpkg.readthedocs.io/en/latest/examples/using-sqlite/#install).

#### Install Dependencies

```powershell
# Required dependencies
> vcpkg install --recurse --triplet x64-windows assimp boost-system boost-filesystem ccd eigen3 fcl

# Optional dependencies
> vcpkg install --recurse --triplet x64-windows bullet3 flann freeglut nlopt ode opengl osg tinyxml2 urdfdom
```

### Build and Install DART using CMake

You will also need CMake to create the build environment for your system. Download CMake 3.14.3 or later for your system [here](http://www.cmake.org/cmake/resources/software.html).

### TortoiseGit or SmartGit (optional)

To download the source code using Git we recommend using [SmartGit](http://www.syntevo.com/smartgit/download).

## DART Source

### Using Git

If you have a Git client installed, clone [the DART repository](https://github.com/dartsim/dart.git). Checkout the tagged version with the highest version number. To do that, choose "Switch/Checkout..." from the TortoiseGit context menu. In the window that appears select the "Tags" option and choose the highest version number from the drop-down menu.

If you are developing DART or want to stay up-to-date with the most recent development (at the expense of using an untested version), just stay on the master branch instead of checking out a tagged version.

### Download as zip file

Go to [the tag page](https://github.com/dartsim/dart/tags) and download the source code for the highest version number. Unpack it.

### Generate Project Files

Run CMake (cmake-gui). Select the directory where you downloaded DART. Name a directory where you want the Visual Studio project files to be placed. You should probably place it under the DART directory, e. g. `[DART directory]\build`

Click "Configure" and choose your development environment (Visual Studio 16).

If you did not install the DART prerequisites in the default install location, you need to change `CMAKE_INSTALL_PREFIX` to your install location and click "Configure" again.

Click "Generate"

## Build and Install

The previous process should create Visual Studio project files. Open `[DART directory]\build\dart.sln`. Choose the "Release" configuration. Right click on the "INSTALL" project and choose "Build". This will build and install DART in `C:\Golems` or the install location you chose. Do the same for the "Debug" configuration.
