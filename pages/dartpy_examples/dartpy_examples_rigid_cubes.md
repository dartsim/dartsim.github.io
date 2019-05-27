---
title: Rigid Cubes
keywords: examples
sidebar: dartpy_examples_sidebar
permalink: dartpy_examples_rigid_cubes.html
folder: dartpy_examples
---

## Screenshot

{% include image.html file="dartpy_examples/dartpy_examples_rigid_cubes.png" alt="rigid cubes" max-width="640"  caption="Rigid Cube example." %}

## Code

```python
import dartpy as dart

if __name__== "__main__":
    world = dart.utils.SkelParser.readWorld("dart://sample/skel/cubes.skel")
    world.setGravity([0, -9.81, 0])

    node = dart.gui.osg.RealTimeWorldNode(world)

    viewer = dart.gui.osg.Viewer()
    viewer.addWorldNode(node)

    viewer.setUpViewInWindow(0, 0, 640, 480)
    viewer.setCameraHomePosition([0.8, 0.0, 0.8], [0, -0.25, 0], [0, 0.5, 0])
    viewer.run()
```
