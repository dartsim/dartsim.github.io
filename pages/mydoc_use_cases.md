---
title: DART Use Cases
keywords: 
sidebar: home_sidebar
permalink: use_cases.html
toc: false
---

## Software

| Thumbnail | Software |
|-----------|--------|
| <img src="http://www.gazebosim.org/assets/logos/gazebo_vert_pos_small-cae32db40df918570d1c43f1fccf1aa6.png"> | **[Gazebo](http://www.gazebosim.org/)** <br> Gazebo simulates multipe robots in a 3D environment, with extensive dynamic integration between objects. Gazebo supports multiple physics engines: ODE, Bullet, DART, and Simbody. [website](http://www.gazebosim.org/), [source on bitbucket](https://bitbucket.org/osrf/gazebo) |
|  | **[PyDART2](https://github.com/sehoonha/pydart2)** <br> PyDART2 is an open source python binding of DART, an open source physics simulator. Its APIs are designed to provide concise and powerful control on DART physics worlds. Further, a user can write simulations with a numerous python scientific libraries, such as NumPy(linear algebra), SciPy(optimization), scikit-learn (machine learning), PyBrain(machine learning), and so on. ([website](http://pydart2.readthedocs.io/)) |
|  | **[AIKIDO](https://github.com/personalrobotics/aikido)** <br> a C++ library, complete with Python bindings, for solving robotic motion planning and decision making problems. This library is tightly integrated with [DART](http://dartsim.github.io/) for kinematic/dynamics calculations and [OMPL](http://ompl.kavrakilab.org/) for motion planning. |
|  | **[libcozmo](https://github.com/personalrobotics/libcozmo)** <br> C++ library for simulating and running Cozmo based on DART and AIKIDO |

## Academic Research

This is a curated list of research publications using DART.

| Thumbnail | Papers |
|-----------|--------|
| | Pautrat, R., Chatzilygeroudis, K., & Mouret, J.-B. (2018). [Bayesian Optimization with Automatic Prior Selection for Data-Efficient Direct Policy Search](https://arxiv.org/pdf/1709.06919). *Proceedings of the International Conference on Robotics and Automation (ICRA)*. |
| | Chatzilygeroudis, K., Vassiliades, V. and Mouret, J.-B. (2017). [Reset-free Trial-and-Error Learning for Robot Damage Recovery](https://arxiv.org/pdf/1610.04213). *Robotics and Autonomous Systems*. |
| <img src="https://dartsim.github.io/images/use_cases/2017_data.jpg"/> | Data-Driven Approach to Simulating Realistic Human Joint Constraints, Yifeng Jiang and C. Karen Liu , Preprint, 2017 [arXiv](https://arxiv.org/abs/1709.08685) |
| <img src="https://dartsim.github.io/images/use_cases/2017_multi.jpg"/> | Multi-task Learning with Gradient Guided Policy Specialization, Wenhao Yu, Greg Turk, and C. Karen Liu , Preprint, 2017 [arXiv](https://arxiv.org/abs/1709.07979) |
| <img src="https://dartsim.github.io/images/use_cases/2017_learning_human.jpg"/> | Learning Human Behaviors for Robot-Assisted Dressing, Alexander Clegg, Wenhao Yu, Jie Tan, Charlie C. Kemp, Greg Turk, and C. Karen Liu , Preprint, 2017 [arXiv](https://arxiv.org/abs/1709.07033) |
| <img src="https://dartsim.github.io/images/use_cases/2017_expanding.jpg"/> | Expanding Motor Skills through Relay Neural Networks, Visak C.V. Kumar, Sehoon Ha, and C. Karen Liu, Preprint, 2017 [arXiv](https://arxiv.org/abs/1709.07932) |
| <img src="https://dartsim.github.io/images/use_cases/2017_stair.jpg"/> | Stair negotiation made easier using novel interactive energy-recycling assistive stairs, Yun Seong Song, Sehoon Ha, Hsiang Hsu, Lena H. Ting, and C. Karen Liu, in PLOS ONE, 2017 [link](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0179637) |
| <img src="https://dartsim.github.io/images/use_cases/2017_learning_a_unified.jpg"/> | Learning a Unified Control Policy for Safe Falling, Visak C.V. Kumar, Sehoon Ha, and C. Karen Liu, Preprint, 2017 [arXiv](https://arxiv.org/abs/1703.02905) |
| <img src="https://dartsim.github.io/images/use_cases/2017_learning_to_navigate.jpg"/> | Learning to Navigate Cloth using Haptics, Alexander Clegg, Wenhao Yu, Zackory Erickson, Jie Tan, C. Karen Liu, and Greg Turk, Preprint, 2017 [arXiv](https://arxiv.org/abs/1703.06905) |
| <img src="https://dartsim.github.io/images/use_cases/2017_preparing.jpg"/> | Preparing for the Unknown: Learning a Universal Policy with Online System Identification, Wenhao Yu, Jie Tan, C. Karen Liu, and Greg Turk, Preprint, 2017 [arXiv](https://arxiv.org/abs/1702.02453) |
| | Vassiliades V., Chatzilygeroudis K., and Mouret JB. (2016). [Using centroidal voronoi tessellations to scale up the multi-dimensional archive of phenotypic elites algorithm](https://arxiv.org/pdf/1610.05729.pdf). *IEEE Transactions on Evolutionary Computation*. |
| <img src="https://dartsim.github.io/images/use_cases/2016_a_linear.jpg"/> | A Linear-Time Variational Integrator for Multibody Systems, Jeongseok Lee, C. Karen Liu, Frank C. Park, and Siddhartha S. Srinivasa, Preprint, 2016 [arXiv](https://arxiv.org/abs/1609.02898) |
| <img src="http://dartsim.github.io/images/use_cases/2016_simulation.jpg"/> | Simulation-Based Design of Dynamic Controllers for Humanoid Balancing, Jie Tan, Zhaoming Xie, Byron Boots, and C. Karen Liu, in IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2016 [PDF](http://www.cc.gatech.edu/~bboots3/files/Simulation_based_design.pdf) |
| <img src="https://dartsim.github.io/images/use_cases/2016_humanoid.jpg"/> | Humanoid Manipulation Planning using Backward-Forward Search, Michael X. Grey, Caelan R. Garrett, C. Karen Liu, Aaron D. Ames, and Andrea L. Thomaz, in IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2016 [PDF](http://www.cc.gatech.edu/graphics/projects/Grey/humanoid_hbf_iros2016.pdf) [Video](http://www.cc.gatech.edu/graphics/projects/Grey/iros2016_humanoid_hbf.mp4) |
| <img src="https://dartsim.github.io/images/use_cases/2016_evolutionary.jpg"/> | Evolutionary Optimization for Parameterized Whole-body Dynamic Motor Skills, Sehoon Ha and C. Karen Liu, in IEEE International Conference on Robotics and Automation (ICRA) 2016 [PDF](http://sehoonha.com/projects/ha2016eop/2016_optskill.pdf) [Video](https://youtu.be/vomyRgVj21w) |
| <img src="https://dartsim.github.io/images/use_cases/2016_dexterous.jpg"/> | Dexterous Manipulation of Cloth, Yunfei Bai, Wenhao Yu (co-first author), and C. Karen Liu, in Computer Graphics Forum (Eurographics), 2016 [PDF](http://www.cc.gatech.edu/~ybai30/cloth_manipulation/paper_cloth_manipulation.pdf) [Video](https://youtu.be/_H_PlIvL3-k) |
| <img src="https://dartsim.github.io/images/use_cases/2015_multiple.jpg"/>  | [Multiple Contact Planning for Minimizing Damage of Humanoid Falls](http://www.cc.gatech.edu/~sha9/projects/ha2015mcs/index.html), Sehoon Ha and C. Karen Liu, in IEEE/RSJ International Conference on Intelligent Robots and Systems, 2015 |
| <img src="https://dartsim.github.io/images/use_cases/2015_animating.jpg"/>  | [Animating Human Dressing](http://www.cc.gatech.edu/~aclegg3/projects/AnimatingHumanDressing.html), Alex Clegg, Jia Tan, Greg Turk, and C. Karen Liu, in Transactions on Graphics (SIGGRAPH), 2015 |
| <img src="https://dartsim.github.io/images/use_cases/2014_coupling.jpg"/>  | [Coupling Cloth and Rigid Bodies for Dexterous Manipulation](http://www.cc.gatech.edu/~ybai30/cloth/paper_cloth.pdf), Yunfei Bai and C. Karen Liu, in Motion in Games, 2014 (Best Student Paper Award) |
| <img src="https://dartsim.github.io/images/use_cases/2014_orienting.png"/>  | [Orienting in Mid-air through Configuration Changes to Achieve a Rolling Landing for Reducing Impact after a Fall](http://www.cc.gatech.edu/~karenliu/bingham_inertiabot_IROS2014.pdf), Jeffrey T. Bingham, Jeongseok Lee, Ravi N. Haksar, Jun Ueda, and C. Karen Liu, in IEEE/RSJ International Conference on Intelligent Robots and Systems, 2014 |
| <img src="https://dartsim.github.io/images/use_cases/2014_dexterous.jpg"/> | [Dexterous Manipulation Using Both Palm and Fingers](http://www.cc.gatech.edu/~ybai30/hand/hand.html), Yunfei Bai and C. Karen Liu, in IEEE International Conference on Robotics and Automation, 2014 |
| <img src="https://dartsim.github.io/images/use_cases/2012_synthesis.jpg"/> | [Synthesis of Concurrent Object Manipulation Tasks](http://www.cc.gatech.edu/~ybai30/multitask/multitask.html), Yunfei Bai, Kristin Siu and C. Karen Liu, in ACM Transactions on Graphics (presented at SIGGRAPH Asia), 2012 |



