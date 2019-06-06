---
title: Install dartpy on macOS
keywords:
sidebar: home_sidebar
permalink: install_dartpy_on_macos.html
toc: false
---

## Install dartpy using pip3

```
# Dependencies
brew install dartsim --only-dependencies
brew install pybind11

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

## Install dartpy from Source

### Install Required Dependencies

```
brew install dartsim --only-dependencies
brew install pybind11
```

### Build and Install dartpy

1.  Clone the repository into a directory in your home folder:

    ```
    git clone git://github.com/dartsim/dart.git
    ```

2.  Create a build directory:

    ```
    mkdir build
    cd build
    ```

3.  Configure and build DART:

    ```
    cmake .. -DDART_BUILD_DARTPY=ON -DCMAKE_INSTALL_PREFIX=/usr/ -DCMAKE_BUILD_TYPE=Release
    make -j4 dartpy
    ```

4.  Install dartpy:

    ```
    sudo make install
    ```

    If you want to uninstall dartpy, run:

    ```
    sudo make uninstall
    ```
