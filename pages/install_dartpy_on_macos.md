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

{% include warning.html content="Known issues: (1) Pip install of dartpy on Anaconda environment does't work; import error. (2) Uninstalling pip-installed dartpy doesn't completely remove dartpy.so, and this leads to incorrect re-installing." %}

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
    git clone https://github.com/dartsim/dart.git
    ```

2.  Change directory to the DART repository and checkout the [latest release](https://github.com/dartsim/dart/releases) of DART 6 (e.g., v6.11.1):

    ```
    cd dart
    git checkout tags/v6.11.1
    ```

3.  Create a build directory:

    ```
    mkdir build
    cd build
    ```

4.  Configure and build DART:

    ```
    cmake .. -DCMAKE_INSTALL_PREFIX=/usr/ -DCMAKE_BUILD_TYPE=Release -DDART_BUILD_DARTPY=ON
    make -j4 dartpy
    ```

5.  Install dartpy:

    ```
    sudo make install-dartpy
    ```
