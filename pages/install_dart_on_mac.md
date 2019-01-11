---
title: Install DART on Mac
keywords: install, mac
last_updated: Aug 8, 2018
sidebar: home_sidebar
permalink: install_dart_on_mac.html
---

## Build Environments

### Supported Platforms

DART 6.7 has been tested to run on macOS High Sierra (10.13) with [clang](http://clang.llvm.org/) (Apple LLVM version 9.1).

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

## Install from Source using Homebrew

First, install Homebrew by following [the previous instruction](https://github.com/dartsim/dart/wiki/Mac%20Installation%20for%20DART%206#install-homebrew).

### Install Dependencies

```bash
$ brew install dartsim --only-dependencies
```

### Build and Install DART

After this you should be able to clone the DART repository and compile it.

1.  Clone the repository into a directory in your home folder:

    ```
    $ git clone git://github.com/dartsim/dart.git
    ```

1.  Change directory to the DART repository and checkout the latest tag of DART 6, `v6.7.0`:

    ```
    $ cd dart
    $ git checkout tags/v6.7.0
    ```

1.  Create a build directory:

    ```
    $ mkdir build
    $ cd build
    ```

1.  Configure and build DART:

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

        If you want to build the tests, tutorials, or examples, run follows:

        ```
        $ make -j4 tests
        $ make -j4 tutorials
        $ make -j4 examples
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

1.  Install DART:

    ```
    $ sudo make install
    ```

    If you want to uninstall DART, then:

    ```
    $ sudo make uninstall
    ```

