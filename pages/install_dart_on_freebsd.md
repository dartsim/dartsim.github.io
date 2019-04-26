---
title: Install DART on FreeBSD
keywords: install, freebsd
last_updated: Apr 26, 2019
sidebar: home_sidebar
permalink: install_dart_on_freebsd.html
---

{% include warning.html content="Installing DART on FreeBSD is not tested by the DART developers. Following intstructions are written based on the FreeBSD documents. If someone can verify this instructions, then please feel free to submit PRs removing this warning or adding any updates." %}

## Install DART using [pkg](https://www.freebsd.org/doc/handbook/pkgng-intro.html)

```
# pkg install dartsim
```

## Install DART from Source

### Install Dependencies

```
# pkg install assimp boost fcl flann glut libccd libgl octomap urdfdom eigen
```

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
