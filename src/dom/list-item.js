import { Component } from 'inferno';
import Checkbox from './checkbox';
import classlist from '../lib/classlist';
import EditToolbar from './edit-toolbar';
import EmptyList from './empty-list';
import InspireTree from 'inspire-tree';
import List from './list';
import NodeAnchor from './node-anchor.js';
import ToggleAnchor from './toggle-anchor.js';

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = this.stateFromNode(props.node);
    }

    stateFromNode(node) {
        return {
            dirty: node.itree.dirty
        };
    }

    componentWillReceiveProps(data) {
        this.setState(this.stateFromNode(data.node));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.dirty;
    }

    getAttributes() {
        const node = this.props.node;
        const attributes = _.clone(node.itree.li.attributes) || {};
        attributes.class = attributes.className = this.getClassNames();

        // Force internal-use attributes
        attributes['data-uid'] = node.id;

        // Allow drag and drop?
        if (this.props.dom.config.dragAndDrop.enabled) {
            attributes.draggable = node.state('draggable');
            attributes.onDragEnd = this.onDragEnd.bind(this);
            attributes.onDragEnter = this.onDragEnter.bind(this);
            attributes.onDragLeave = this.onDragLeave.bind(this);
            attributes.onDragStart = this.onDragStart.bind(this);

            // Are we a valid drop target?
            if (node.state('drop-target')) {
                attributes.onDragOver = this.onDragOver.bind(this);
                attributes.onDrop = this.onDrop.bind(this);
            }
            else {
                // Setting to null forces removal of prior listeners
                attributes.onDragOver = null;
                attributes.onDrop = null;
            }
        }

        return attributes;
    }

    getClassNames() {
        const node = this.props.node;
        const state = node.itree.state;

        // Set state classnames
        let classNames = classlist(node);

        // https://jsperf.com/object-keys-vs-each
        _.each(Object.keys(state), (key) => {
            if (state[key]) {
                classNames.push(key);
            }
        });

        // Inverse and additional classes
        if (!node.hidden() && node.removed()) {
            classNames.push('hidden');
        }

        if (node.expanded()) {
            classNames.push('expanded');
        }

        if (node.isFirstRenderable()) {
            classNames.push('first');
        }

        if (node.isLastRenderable()) {
            classNames.push('last');
        }

        if (node.isOnlyRenderable()) {
            classNames.push('only');
        }

        classNames.push(node.hasOrWillHaveChildren() ? 'folder' : 'leaf');

        return classNames.join(' ');
    }

    getTargetDirection(event, elem) {
        const clientY = event.clientY;
        const targetRect = elem.getBoundingClientRect();

        const yThresholdForAbove = targetRect.top + (targetRect.height / 3);
        const yThresholdForBelow = targetRect.bottom - (targetRect.height / 3);

        let dir = 0;

        if (clientY <= yThresholdForAbove) {
            dir = -1;
        }
        else if (clientY >= yThresholdForBelow) {
            dir = 1;
        }

        return dir;
    }

    onDragStart(event) {
        event.stopPropagation();

        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';

        const node = this.props.node;

        // Due to "protected" mode we can't access any DataTransfer data
        // during the dragover event, yet we still need to validate this node with the target
        this.props.dom._activeDragNode = node;

        event.dataTransfer.setData('treeId', node.tree().id);
        event.dataTransfer.setData('nodeId', node.id);

        // Disable self and children as drop targets
        node.state('drop-target', false);

        if (node.hasChildren()) {
            node.children.stateDeep('drop-target', false);
        }

        // If we should validate all nodes as potential drop targets on drag start
        if (this.props.dom.config.dragAndDrop.validateOn === 'dragstart') {
            const validator = this.props.dom.config.dragAndDrop.validate;
            const validateCallable = _.isFunction(validator);

            // Validate with a custom recursor because a return of "false"
            // should mean "do not descend" rather than "stop iterating"
            const recursor = function(obj, iteratee) {
                if (InspireTree.isTreeNodes(obj)) {
                    _.each(obj, (n) => {
                        recursor(n, iteratee);
                    });
                }
                else if (InspireTree.isTreeNode(obj)) {
                    if (iteratee(obj) !== false && obj.hasChildren()) {
                        recursor(obj.children, iteratee);
                    }
                }
            };

            this.props.dom._tree.batch();

            recursor(this.props.dom._tree.model, (n) => {
                let valid = n.id !== node.id;

                // Ensure target node isn't a descendant
                if (valid) {
                    valid = !n.hasAncestor(node);
                }

                // If still valid and user has additional validation...
                if (valid && validateCallable) {
                    valid = validator(node, n);
                }

                // Set state
                n.state('drop-target', valid);

                return valid;
            });

            this.props.dom._tree.end();
        }

        this.props.dom._tree.emit('node.dragstart', event);
    }

    onDragEnd(event) {
        event.preventDefault();
        event.stopPropagation();

        this.unhighlightTarget();

        this.props.dom._tree.emit('node.dragend', event);
    }

    onDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();

        // Nodes already within parents don't trigger enter/leave events on their ancestors
        this.props.node.recurseUp(this.unhighlightTarget);

        // Set drag target state
        this.props.node.state('drag-targeting', true);

        this.props.dom._tree.emit('node.dragenter', event);
    }

    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();

        this.unhighlightTarget();

        this.props.dom._tree.emit('node.dragleave', event);
    }

    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();

        const dragNode = this.props.dom._activeDragNode;
        const node = this.props.node;

        // Event.target doesn't always match the element we need to calculate
        const dir = this.getTargetDirection(event, node.itree.ref.querySelector('a'));

        if (this.props.dom.config.dragAndDrop.validateOn === 'dragover') {
            // Validate drop target
            const validator = this.props.dom.config.dragAndDrop.validate;
            const validateCallable = _.isFunction(validator);

            let valid = dragNode.id !== node.id;

            if (valid) {
                valid = !node.hasAncestor(dragNode);
            }

            if (valid && validateCallable) {
                valid = validator(dragNode, node, dir);
            }

            // Set state
            node.state('drop-target', valid);
            this.props.dom._tree.applyChanges();

            if (!valid) {
                return;
            }
        }

        // Set drag target states
        this.props.dom._tree.batch();
        node.state('drag-targeting', true);
        node.state('drag-targeting-above', dir === -1);
        node.state('drag-targeting-below', dir === 1);
        node.state('drag-targeting-insert', dir === 0);
        this.props.dom._tree.end();

        this.props.dom._tree.emit('node.dragover', event, dir);
    }

    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();

        // Always unhighlight target
        this.unhighlightTarget();

        // Get the data from our transfer
        const treeId = event.dataTransfer.getData('treeId');
        const nodeId = event.dataTransfer.getData('nodeId');

        // Find the drop target
        const targetNode = this.props.node;

        // Clear cache
        this.props.dom._activeDragNode = null;

        // Determine the insert direction (calc before removing source node, which modifies the DOM)
        const dir = this.getTargetDirection(event, event.target);

        let sourceTree;
        if (treeId === this.props.dom._tree.id) {
            sourceTree = this.props.dom._tree;
        }
        else if (treeId) {
            sourceTree = document.querySelector('[data-uid="' + treeId + '"]').inspireTree;
        }

        // Only source/handle node if it's a node that was dropped
        let newNode, newIndex;
        if (sourceTree) {
            const node = sourceTree.node(nodeId);
            node.state('drop-target', true);

            const exported = node.remove(true);

            // Get the index of the target node
            let targetIndex = targetNode.context().indexOf(targetNode);

            if (dir === 0) {
                // Add as a child
                newNode = targetNode.addChild(exported);

                // Cache the new index
                newIndex = targetNode.children.indexOf(newNode);

                // Auto-expand
                targetNode.expand();
            }
            else {
                // Determine the new index
                newIndex = dir === 1 ? ++targetIndex : targetIndex;

                // Insert and cache the node
                newNode = targetNode.context().insertAt(newIndex, exported);
            }
        }

        this.props.dom._tree.emit('node.drop', event, newNode, targetNode, newIndex);
    }

    unhighlightTarget(node) {
        (node || this.props.node).states([
            'drag-targeting',
            'drag-targeting-above',
            'drag-targeting-below',
            'drag-targeting-insert'
        ], false);
    }

    renderCheckbox() {
        const node = this.props.node;

        if (this.props.dom.config.showCheckboxes) {
            return (<Checkbox
                checked={node.checked()}
                dom={this.props.dom}
                indeterminate={node.indeterminate()}
                node={node} />);
        }
    }

    renderChildren() {
        const { node, dom } = this.props;

        if (node.hasChildren()) {
            const nodes = node.children;
            const loading = dom.loading;
            const pagination = nodes.pagination();

            return (<List
                context={node}
                dom={dom}
                limit={pagination.limit}
                loading={loading}
                nodes={nodes}
                total={pagination.total} />);
        }
        else if (this.props.dom.isDynamic && node.children) {
            if (!node.hasLoadedChildren()) {
                return <EmptyList text='Loading...' />;
            }
            else {
                return <EmptyList text='No Results' />;
            }
        }
    }

    renderEditToolbar() {
        // @todo fix this boolean
        if (this.props.dom._tree.config.editing.edit && !this.props.node.editing()) {
            return <EditToolbar dom={this.props.dom} node={this.props.node} />;
        }
    }

    renderToggle() {
        const node = this.props.node;
        const hasVisibleChildren = !this.props.dom.isDynamic ? node.hasVisibleChildren() : Boolean(node.children);

        if (hasVisibleChildren) {
            return <ToggleAnchor collapsed={node.collapsed()} node={node} />;
        }
    }

    render() {
        const node = this.props.node;

        const li = (<li
            {...this.getAttributes()}
            ref={elem => this.node = this.props.node.itree.ref = elem}>
            { this.renderEditToolbar() }
            <div className='title-wrap'>
                { this.renderToggle() }
                { this.renderCheckbox() }
                <NodeAnchor
                    dom={this.props.dom}
                    editing={node.editing()}
                    expanded={node.expanded()}
                    hasOrWillHaveChildren={node.hasOrWillHaveChildren()}
                    node={node}
                    text={node.text} />
            </div>
            <div className='wholerow' />
            { this.renderChildren() }
        </li>);

        // Clear dirty bool only after everything has been generated (and states set)
        this.props.node.state('rendered', true);
        this.props.node.itree.dirty = false;

        return li;
    }
}
