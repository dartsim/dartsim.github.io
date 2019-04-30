---
title: Install DART on Archlinux
keywords: install, archlinux
last_updated: Apr 30, 2019
sidebar: home_sidebar
permalink: install_dart_on_archlinux.html
---

{% include note.html content="Installing DART on Archlinux is not tested by the DART developers." %}

## Install DART from the [AUR](https://wiki.archlinux.org/index.php/Arch_User_Repository)

DART is available in the Arch User Repository (AUR) as
[`libdart`](https://aur.archlinux.org/packages/libdart/).

Note you can manually install the package by following the instructions on the
[Arch Wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages)
or use an [AUR helper](https://wiki.archlinux.org/index.php/AUR_helpers)
(recommended for ease of install).

To discuss any issues related to this package refer to the comments section on
the AUR page of `libdart` [here](https://aur.archlinux.org/packages/libdart/).

## Install DART from Source

### Install Required Dependencies

```
sudo pacman -Sy assimp boost glut libgl eigen
```

The following required dependencies are not available in the Arch Linux supported
repositories, however they are available in the AUR or you can install them from
source.

```
fcl flann libccd octomap urdfdom
```

### Install Optional Dependencies

```
sudo pacman -Sy bullet doxygen nlopt ode openscenegraph
```

The following optional dependency is not available in the Arch Linux supported
repositories, however it is available in the AUR or you can install it from
source.

```
coin-or-ipopt
```

`pagmo` is an optional dependency not available in the Arch Linux supported
repositories or the AUR. Refer to the `pagmo` [installation page](https://esa.github.io/pagmo2/install.html#)
for installation instructions.

### Build and Install DART

1.  Clone the repository into a directory in your home folder:

    ```
    git clone git://github.com/dartsim/dart.git
    ```

2.  Change directory to the DART repository and checkout the latest tag of DART 6, e.g., `v6.8.2`:

    ```
    cd dart
    git checkout tags/v6.8.2
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
      make -j4 test  # or cmake -j4
      ```

      or run a particular test as:

      ```shell
      ./unittests/<category_name>/<test_name>  # e.g., ./unittests/unit/test_Uri
      ```

      Also, you can run tutorials and examples as:

      ```shell
      ./bin/<executable_name>  # e.g., ./bin/rigidCubes
      ```

  * Build Type

    You can specify the build type \[ Debug \| Release \| RelWithDebInfo \| Profile \] as:

    ```
    cmake .. -DCMAKE_BUILD_TYPE=Debug
    ```

    The default build type is `Release`.

5.  Install DART:

    ```
    sudo make install
    ```

    If you want to uninstall DART, then:

    ```
    sudo make uninstall
    ```
