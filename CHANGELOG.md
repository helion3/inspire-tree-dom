# Changes to Inspire Tree DOM

# 4.0.5

- Updated to Inferno 5.1.1, which includes a fix for compatibility with angularjs.

# 4.0.4

- Fixed drop event logic failing when non-nodes are dropped.

# 4.0.3

- Fixed color of focused wholerow border for dark theme.
- Fixed left/right/enter keys using an invalid variable.

# 4.0.2

- Fixed keyboard navigation error caused by linter fix regression.

# 4.0.1

- Fixed keyboard navigation also causing browser scroll behavior.
- Fixed script error when pressing an arrow key after a node has lost focus.
- Improved typescript definition file (Requires InspireTree v4.2.1).
- Moved two npm dependencies to the dependencies array to support ES6 users.

# 4.0.0

- Improved node drag target validation.
- Refactored drag and drop to use node states instead of manual class manipulation.
- Fixed custom css class logic for node anchors.
- Fixed node title overflow error in chrome.
- Removed duplicate `indeterminate` logic for checkboxes.

**Breaking Changes**

- Requires InspireTree v4.2+.
- Drag and drop css classes have changed:
- `itree-droppable-active.itree-droppable-target` -> `.drag-targeting.drag-targeting-insert`
- `itree-droppable-active.itree-droppable-target-above` -> `.drag-targeting.drag-targeting-above`
- `itree-droppable-active.itree-droppable-target-below` -> `.drag-targeting.drag-targeting-below`

# 3.0.2

- Restored missing `node.edited` event.

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
