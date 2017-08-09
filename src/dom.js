'use strict';

// Libs
import * as _ from 'lodash';
import { render } from 'inferno';
import Inferno from 'inferno';
import InspireTree from 'inspire-tree';
import Tree from './dom/tree';

/**
 * Default InspireTree rendering logic.
 *
 * @category DOM
 * @return {InspireDOM} Default renderer.
 */
export default class InspireDOM {
    constructor(tree, opts) {
        if (!(tree instanceof InspireTree)) {
            throw new TypeError('Tree argument is not an InspireTree instance.');
        }

        // Init properties
        this._tree = tree;
        this.batching = 0;
        this.dropTargets = [];
        this.$scrollLayer;

        if (!opts.target) {
            throw new TypeError('Invalid `target` property - must be a selector, HTMLElement, or jQuery element.');
        }

        // Let InspireTree know we're in control of a node's `rendered` state
        tree.usesNativeDOM = true;

        // Assign defaults
        this.config = _.defaults({}, opts, {
            autoLoadMore: true,
            deferredRendering: false,
            dragAndDrop: false,
            nodeHeight: 25,
            showCheckboxes: false,
            tabindex: -1,
            target: false
        });

        // If user didn't specify showCheckboxes,
        // but is using checkbox selection mode,
        // enable it automatically.
        if (tree.config.selection.mode === 'checkbox' && !_.isBoolean(_.get(opts, 'showCheckboxes'))) {
            this.config.showCheckboxes = true;
        }

        // Cache because we use in loops
        this.isDynamic = _.isFunction(this._tree.config.data);

        // Connect to our target DOM element
        this.attach(this.config.target);

        let initialRender = true;

        // Apply changes
        tree.on('changes.applied', () => {
            this.renderNodes();

            if (initialRender) {
                this.scrollSelectedIntoView();

                initialRender = false;
            }
        });

        // Immediately render, just in case any already exists
        this.renderNodes();
    }

    /**
     * Attaches to the DOM element for rendering.
     *
     * @category DOM
     * @private
     * @param {HTMLElement} target Element, selector, or jQuery-like object.
     * @return {void}
     */
    attach(target) {
        this.$target = this.getElement(target);
        this.$scrollLayer = this.getScrollableAncestor(this.$target);

        if (!this.$target) {
            throw new Error('No valid element to attach to.');
        }

        this.$target.setAttribute('data-uid', this._tree.id);

        // Set classnames
        let classNames = this.$target.className.split(' ');
        classNames.push('inspire-tree');

        if (this._tree.config.editable) {
            classNames.push('editable');

            _.each(_.pickBy(this._tree.config.editing, _.identity), (v, key) => {
                classNames.push('editable-' + key);
            });
        }

        this.$target.className = classNames.join(' ');
        this.$target.setAttribute('tabindex', this.config.tabindex || 0);

        // Handle keyboard interaction
        this.$target.addEventListener('keyup', this.keyboardListener.bind(this));

        // Drag and drop listeners
        if (this.config.dragAndDrop) {
            this.$target.addEventListener('dragenter', this.onDragEnter.bind(this), false);
            this.$target.addEventListener('dragleave', this.onDragLeave.bind(this), false);
            this.$target.addEventListener('dragover', this.onDragOver.bind(this), false);
            this.$target.addEventListener('drop', this.onDrop.bind(this), false);
        }

        // Sync browser focus to focus state
        this._tree.on('node.focused', (node) => {
            let elem = node.itree.ref.querySelector('.title');
            if (elem !== document.activeElement) {
                elem.focus();
            }
        });

        if (this.config.deferredRendering || this._tree.config.deferredLoading) {
            // Force valid pagination limit based on viewport
            var limit = this._tree.config.pagination.limit;
            this._tree.config.pagination.limit = limit > 0 ? limit : _.ceil(this.$scrollLayer.clientHeight / this.config.nodeHeight);

            // Listen for scrolls for automatic loading
            if (this.config.autoLoadMore) {
                this.$target.addEventListener('scroll', _.throttle(this.scrollListener.bind(this), 20));
            }
        }

        this.$target.inspireTree = this._tree;
    }

    /**
     * Clear page text selection, primarily after a click event which
     * natively selects a range of text.
     *
     * @category DOM
     * @private
     * @return {void}
     */
    clearSelection() {
        if (document.selection && document.selection.empty) {
            document.selection.empty();
        }
        else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }

    /**
     * Get an HTMLElement through various means:
     * An element, jquery object, or a selector.
     *
     * @category DOM
     * @private
     * @param {mixed} target Element, jQuery selector, selector.
     * @return {HTMLElement} Matching element.
     */
    getElement(target) {
        let $element;

        if (target instanceof HTMLElement) {
            $element = target;
        }
        else if (_.isObject(target) && _.isObject(target[0])) {
            $element = target[0];
        }
        else if (_.isString(target)) {
            let match = document.querySelector(target);
            if (match) {
                $element = match;
            }
        }

        return $element;
    }

    /**
     * Helper method to find a scrollable ancestor element.
     *
     * @category DOM
     * @private
     * @param {HTMLElement} $element Starting element.
     * @return {HTMLElement} Scrollable element.
     */
    getScrollableAncestor($element) {
        if ($element instanceof Element) {
            let style = getComputedStyle($element);
            if (style.overflow !== 'auto' && $element.parentNode) {
                $element = this.getScrollableAncestor($element.parentNode);
            }
        }

        return $element;
    }

    /**
     * Get a tree instance based on an ID.
     *
     * @category DOM
     * @param {string} id Tree ID.
     * @return {InspireTree} Tree instance.
     */
    static getTreeById(id) {
        var element = document.querySelector('[data-uid="' + id + '"]');
        if (element) {
            return element.inspireTree;
        }
    }

    /**
     * Listen to keyboard event for navigation.
     *
     * @category DOM
     * @private
     * @param {Event} event Keyboard event.
     * @return {void}
     */
    keyboardListener(event) {
        // Navigation
        let focusedNode = this._tree.focused();
        if (focusedNode) {
            focusedNode = focusedNode[0];
            switch (event.which) {
                case 40:
                    this.moveFocusDownFrom(focusedNode);
                    break;
                case 13:
                    focusedNode.toggleSelect();
                    break;
                case 37:
                    focusedNode.collapse();
                    break;
                case 39:
                    focusedNode.expand();
                    break;
                case 38:
                    this.moveFocusUpFrom(focusedNode);
                    break;
                default:
            }
        }
    }

    /**
     * Move select down the visible tree from a starting node.
     *
     * @category DOM
     * @private
     * @param {object} startingNode Node object.
     * @return {void}
     */
    moveFocusDownFrom(startingNode) {
        let next = startingNode.nextVisibleNode();
        if (next) {
            next.focus();
        }
    }

    /**
     * Move select up the visible tree from a starting node.
     *
     * @category DOM
     * @private
     * @param {object} startingNode Node object.
     * @return {void}
     */
    moveFocusUpFrom(startingNode) {
        let prev = startingNode.previousVisibleNode();
        if (prev) {
            prev.focus();
        }
    }

    /**
     * Helper method for obtaining the data-uid from a DOM element.
     *
     * @category DOM
     * @private
     * @param {HTMLElement} element HTML Element.
     * @return {object} Node object
     */
    nodeFromTitleDOMElement(element) {
        let uid = element.parentNode.parentNode.getAttribute('data-uid');
        return this._tree.node(uid);
    }

    /**
     * Drag enter listener.
     *
     * @category DOM
     * @private
     * @param {DragEvent} event Drag enter.
     * @return {void}
     */
    onDragEnter(event) {
        event.preventDefault();

        event.target.classList.add('itree-droppable-active');
    }

    /**
     * Drag leave listener.
     *
     * @category DOM
     * @private
     * @param {DragEvent} event Drag leave.
     * @return {void}
     */
    onDragLeave(event) {
        event.preventDefault();

        this.unhighlightTarget(event.target);
    }

    /**
     * Drag over listener.
     *
     * @category DOM
     * @private
     * @param {DragEvent} event Drag over.
     * @return {void}
     */
    onDragOver(event) {
        event.preventDefault();
    }

    /**
     * Drop listener.
     *
     * @category DOM
     * @private
     * @param {DragEvent} event Dropped.
     * @return {void}
     */
    onDrop(event) {
        event.preventDefault();

        let treeId = event.dataTransfer.getData('treeId');
        let nodeId = event.dataTransfer.getData('nodeId');

        // Find the tree
        const tree = InspireDOM.getTreeById(treeId);

        // Remove the node from its previous context
        let exported = tree.node(nodeId).remove();

        // Add the node to this tree/level
        var newNode = this._tree.addNode(exported);
        var newIndex = this._tree.indexOf(newNode);

        this._tree.emit('node.drop', event, newNode, null, newIndex);
    }

    /**
     * Triggers rendering for the given node array.
     *
     * @category DOM
     * @private
     * @param {array} nodes Array of node objects.
     * @return {void}
     */
    renderNodes(nodes) {
        render(<Tree dom={this} nodes={nodes || this._tree.nodes()} />, this.$target);
    };

    /**
     * Listens for scroll events, to automatically trigger
     * Load More links when they're scrolled into view.
     *
     * @category DOM
     * @private
     * @param {Event} event Scroll event.
     * @return {void}
     */
    scrollListener(event) {
        if (!this.rendering && !this.loading) {
            // Get the bounding rect of the scroll layer
            let rect = this.$scrollLayer.getBoundingClientRect();

            // Find all load-more links
            let links = document.querySelectorAll('.load-more');
            _.each(links, (link) => {
                // Look for load-more links which overlap our "viewport"
                let r = link.getBoundingClientRect();
                let overlap = !(rect.right < r.left || rect.left > r.right || rect.bottom < r.top || rect.top > r.bottom);

                if (overlap) {
                    // Auto-trigger Load More links
                    let context;

                    let $parent = link.parentNode.parentNode.parentNode;
                    if ($parent.tagName === 'LI') {
                        context = this._tree.node($parent.getAttribute('data-uid'));
                    }

                    this._tree.loadMore(context, event);
                }
            });
        }
    }

    /**
     * Scroll the first selected node into view.
     *
     * @category DOM
     * @private
     * @return {void}
     */
    scrollSelectedIntoView() {
        let $selected = this.$target.querySelector('.selected');

        if ($selected && this.$scrollLayer) {
            this.$scrollLayer.scrollTop = $selected.offsetTop;
        }
    }

    /**
     * Remove highlight class.
     *
     * @category DOM
     * @private
     * @param {HTMLElement} node Target element.
     * @return {void}
     */
    unhighlightTarget(node) {
        if (node) {
            node.classList.remove('itree-droppable-active');
        }
    }
}
