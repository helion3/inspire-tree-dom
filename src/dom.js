'use strict';

// Libs
import * as _ from 'lodash';
import { render } from 'inferno';
import Inferno from 'inferno';
import InspireTree from 'inspire-tree';
import Tree from './dom/tree';
import './scss/tree.scss';

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
            dragTargets: false,
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

        let dragTargetSelectors = this.config.dragTargets;
        if (!_.isEmpty(dragTargetSelectors)) {
            _.each(dragTargetSelectors, (selector) => {
                let dropTarget = this.getElement(selector);

                if (dropTarget) {
                    this.dropTargets.push(dropTarget);
                }
                else {
                    throw new Error('No valid element found for drop target ' + selector);
                }
            });
        }

        this.isDragDropEnabled = this.dropTargets.length > 0;

        if (this.isDragDropEnabled) {
            document.addEventListener('mouseup', this.mouseUpListener.bind(this));
            document.addEventListener('mousemove', this.mouseMoveListener.bind(this));
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
     * Creates a draggable element by cloning a target,
     * registers a listener for mousemove.
     *
     * @private
     * @param {HTMLElement} element DOM Element.
     * @param {Event} event Click event to use.
     * @return {void}
     */
    createDraggableElement(element, event) {
        this.$dragNode = this.nodeFromTitleDOMElement(element);

        let rect = element.getBoundingClientRect();
        let diffX = event.clientX - rect.left;
        let diffY = event.clientY - rect.top;

        this.dragHandleOffset = { left: diffX, top: diffY };

        this.$dragElement = element.cloneNode(true);
        this.$dragElement.className += ' dragging';
        this.$dragElement.style.top = rect.top + 'px';
        this.$dragElement.style.left = rect.left + 'px';
        this.$target.appendChild(this.$dragElement);
    }

    /**
     * Get an HTMLElement through various means:
     * An element, jquery object, or a selector.
     *
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
     * @param  {HTMLElement} $element Starting element.
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
     * Listen to keyboard event for navigation.
     *
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
     * Listener for mouse move events for drag and drop.
     * Is removed automatically on mouse up.
     *
     * @private
     * @param {Event} event Mouse move event.
     * @return {void}
     */
    mouseMoveListener(event) {
        if (this.isMouseHeld && !this.$dragElement) {
            this.createDraggableElement(event.target, event);
        }
        else if (this.$dragElement) {
            event.preventDefault();
            event.stopPropagation();

            let x = event.clientX - this.dragHandleOffset.left;
            let y = event.clientY - this.dragHandleOffset.top;

            this.$dragElement.style.left = x + 'px';
            this.$dragElement.style.top = y + 'px';

            let validTarget;
            _.each(this.dropTargets, (target) => {
                let rect = target.getBoundingClientRect();

                if (event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom) {
                    validTarget = target;
                    return false;
                }
            });

            // If new target found for the first time
            if (!this.$activeDropTarget && validTarget && validTarget.className.indexOf('itree-active-drop-target') === -1) {
                validTarget.className += ' itree-active-drop-target';
            }

            this.$activeDropTarget = validTarget;
        }
    }

    /**
     * Handle mouse up events for dragged elements.
     *
     * @return {void}
     */
    mouseUpListener() {
        this.isMouseHeld = false;

        if (this.$dragElement) {
            this.$dragElement.parentNode.removeChild(this.$dragElement);

            if (this.$activeDropTarget) {
                let targetIsTree = _.isFunction(_.get(this.$activeDropTarget, 'inspireTree.addNode'));

                // Notify that the node was "dropped out" of this tree
                this._tree.emit('node.dropout', this.$dragNode, this.$activeDropTarget, targetIsTree);

                // If drop target supports the addNode method, invoke it
                if (targetIsTree) {
                    let newNode = this.$activeDropTarget.inspireTree.addNode(this.$dragNode.copyHierarchy().toObject());

                    // Notify that the node was "dropped out"
                    this.$activeDropTarget.inspireTree.emit('node.dropin', newNode);
                }
            }
        }

        if (this.$activeDropTarget) {
            this.$activeDropTarget.className = this.$activeDropTarget.className.replace('itree-active-drop-target', '');
        }

        this.$dragNode = null;
        this.$dragElement = null;
        this.$activeDropTarget = null;
    }

    /**
     * Move select down the visible tree from a starting node.
     *
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
     * @private
     * @param {HTMLElement} element HTML Element.
     * @return {object} Node object
     */
    nodeFromTitleDOMElement(element) {
        let uid = element.parentNode.parentNode.getAttribute('data-uid');
        return this._tree.node(uid);
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
}
