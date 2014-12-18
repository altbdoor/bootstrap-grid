bootstrap-grid
===

The Grid System component from [Bootstrap](https://github.com/twbs/bootstrap)
with a [customizable generator](http://altbdoor.github.io/bootstrap-grid/).

Currently adhering to Bootstrap version 3.x.


Options
===

Border Box
---
Depending on your preference, `box-sizing: border-box` on all elements may or may not make CSS styling easier. You can go further by specifying if you want `.container` or `.container-fluid` only.

Container
---
If you are sure that you will only use one of the containers, you can choose to exclude the other. If unsure, it is best to keep both.

Push and pull
---
If you need column ordering on different screen sizes, you can choose to include them.

Visibility CSS
---
If you need helper classes for visibility on different screen sizes, you can choose to include them. Having `!important` might lead to undesirable behavior, as it overrides most defined rules. You can choose to include it without `!important`, but it is advisable to include this after all other CSS files.

Print CSS
---
If you need helper classes for print visibility on different screen sizes, you can choose to include them. Having `!important` might lead to undesirable behavior, as it overrides most defined rules. You can choose to include it without `!important`, but it is advisable to include this after all other CSS files.


Note
===
The output file is not compressed in any way and may have redundant parts. For production use, consider minifying it with [refresh-sf](http://gpbmike.github.io/refresh-sf/). 