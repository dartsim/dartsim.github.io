---
title: Install dartpy on Ubuntu
keywords:
sidebar: home_sidebar
permalink: install_dartpy_on_ubuntu.html
toc: false
---

## Install dartpy using pip3

### Dependencies

```
# Required dependencies
sudo apt-get install build-essential cmake pkg-config git
sudo apt-get install libeigen3-dev libassimp-dev libccd-dev libfcl-dev libboost-regex-dev libboost-system-dev
sudo apt-get install libtinyxml2-dev liburdfdom-dev
sudo apt-get install libxi-dev libxmu-dev freeglut3-dev libopenscenegraph-dev
sudo apt-get install python3-pip
# Ubuntu 18.10 and older
git clone https://github.com/pybind/pybind11 -b 'v2.2.4' --single-branch --depth 1
cd pybind11
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release -DPYBIND11_TEST=OFF
make -j4
sudo make install
# Ubuntu 19.04 and newer
sudo apt-get install pybind11-dev

# Optional dependencies
sudo apt-get install libbullet-dev libode-dev liboctomap-dev
# Ubuntu 16.04 and 18.04
sudo apt-get install libnlopt-dev
# Ubuntu 18.10 and later
sudo apt-get install libnlopt-cxx-dev
```

### dartpy

```
# This can take several minutes to build dartpy from source
pip3 install dartpy
```

Once installed, you can simply test if dartpy is successfully installed by running:

```python
$ python3
>>> import dartpy as dart
>>> world = dart.simulation.World()
>>> world.step()
```

## Install dartpy using apt

### On Ubuntu 19.04, 19.10

In Ubuntu 19.04 and 19.10, dartpy can be installed using apt for both of Python 2 and Python 3.

```
sudo apt-add-repository ppa:dartsim/ppa
sudo apt install python-dartpy   # for Python 2
sudo apt install python3-dartpy  # for Python 3
```

Once installed, you can simply test if dartpy is successfully installed by running:

```python
$ python3
>>> import dartpy as dart
>>> world = dart.simulation.World()
>>> world.step()
```

## Install dartpy from Source

### Dependencies

```
# Required dependencies
sudo apt-get install build-essential cmake pkg-config git
sudo apt-get install libeigen3-dev libassimp-dev libccd-dev libfcl-dev libboost-regex-dev libboost-system-dev
sudo apt-get install libtinyxml2-dev liburdfdom-dev
sudo apt-get install libxi-dev libxmu-dev freeglut3-dev libopenscenegraph-dev
sudo apt-get install python3-pip
# Ubuntu 18.10 and older
git clone https://github.com/pybind/pybind11 -b 'v2.2.4' --single-branch --depth 1
cd pybind11
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release -DPYBIND11_TEST=OFF
make -j4
sudo make install
# Ubuntu 19.04 and newer
sudo apt-get install pybind11-dev

# Optional dependencies
sudo apt-get install libbullet-dev libode-dev liboctomap-dev
# Ubuntu 16.04 and 18.04
sudo apt-get install libnlopt-dev
# Ubuntu 18.10 and later
sudo apt-get install libnlopt-cxx-dev
```

### Build and Install dartpy

1.  Clone the repository into a directory in your home folder:

    ```
    git clone git://github.com/dartsim/dart.git
    ```

2.  Change directory to the DART repository and checkout the latest tag of DART 6, `v6.9.0`:

    ```
    cd dart
    git checkout tags/v6.9.0
    ```

3.  Create a build directory:

    ```
    mkdir build
    cd build
    ```

4.  Configure and build DART:

    ```
    cmake .. -DDART_BUILD_DARTPY=ON -DCMAKE_INSTALL_PREFIX=/usr/ -DCMAKE_BUILD_TYPE=Release
    make -j4 dartpy
    ```

5.  Install dartpy:

    ```
    sudo make install
    ```

    If you want to uninstall dartpy, run:

    ```
    sudo make uninstall
    ```

