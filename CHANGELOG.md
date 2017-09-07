# Changes to Inspire Tree DOM

# 3.0.1

- Fixed nodes with empty children arrays showing as folders.
- Removed `inspire-tree` mistakenly listed under package.json dependencies.

# 3.0.0

- Overhauled drag and drop.
- Added a default dark theme.
- Expanded scss variables available for custom compiling.

**Breaking Changes**

- CSS has been broken up into "themes". `inspire-tree.css` has been renamed to `inspire-tree-light.css`.
- Replaced `dragTargets` config with `dragAndDrop` bool.
- Removed `node.dropin` event.
- Removed `node.dropout` event.
- Rewrote the CSS/classes for drop targets.

# 2.0.2

- Added original MouseEvent to node dropin/out events.
- Fixed pagination including hidden nodes.

# 2.0.1

- Fixed loadMore binding error.
- Improved css to handle varying icon widths.
- Upgraded Inferno.

# 2.0.0

- First release. Code was originally part of inspire-tree.
