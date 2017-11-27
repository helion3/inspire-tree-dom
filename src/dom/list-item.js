import Checkbox from './checkbox';
import classlist from '../lib/classlist';
import Component from 'inferno-component';
import EditToolbar from './edit-toolbar';
import EmptyList from './empty-list';
import Inferno from 'inferno';
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

    getClassNames() {
        let node = this.props.node;
        let state = node.itree.state;

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

        classNames.push(node.hasOrWillHaveChildren() ? 'folder' : 'leaf');

        return classNames.join(' ');
    }

    getAttributes() {
        let node = this.props.node;
        let attributes = _.clone(node.itree.li.attributes) || {};
        attributes.className = this.getClassNames();

        // Force internal-use attributes
        attributes['data-uid'] = node.id;

        return attributes;
    }

    getTargetDirection(event) {
        var clientY = event.clientY;
        var targetRect = event.target.getBoundingClientRect();

        var yThresholdForAbove = targetRect.top + (targetRect.height / 3);
        var yThresholdForBelow = targetRect.bottom - (targetRect.height / 3);

        var dir = 0;

        if (clientY <= yThresholdForAbove) {
            dir = -1;
        }
        else if (clientY >= yThresholdForBelow) {
            dir = 1;
        }

        return dir;
    }

    onDragStart(event) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';

        const nodeId = event.target.dataset.uid;
        const node = this.props.dom._tree.node(nodeId);

        // Due to "protected" mode we can't access any DataTransfer data
        // during the dragover event, yet we still need to validate this node with the target
        this.props.dom._activeDragNode = node;

        event.dataTransfer.setData('treeId', node.tree().id);
        event.dataTransfer.setData('nodeId', nodeId);

        this.props.dom._tree.emit('node.dragstart', event);
    }

    onDragEnd(event) {
        event.preventDefault();
        event.stopPropagation();

        this.unhighlightTarget(event.target);

        this.props.dom._tree.emit('node.dragend', event);
    }

    onDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();

        // Highlight a new target
        event.target.classList.add('itree-droppable-active');

        this.props.dom._tree.emit('node.dragenter', event);
    }

    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();

        this.unhighlightTarget(event.target);

        this.props.dom._tree.emit('node.dragleave', event);
    }

    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();

        var node = this.props.node;

        // Remove old classes
        this.unhighlightTarget(event.target);

        // Skip if target node is or is a child of the drag node
        var dragNode = this.props.dom._activeDragNode;
        if (dragNode && (dragNode.id === node.id || node.hasAncestor(dragNode))) {
            return;
        }

        // Indicate active target
        event.target.classList.add('itree-droppable-active');

        var dir = this.getTargetDirection(event);

        if (dir === -1) {
            event.target.classList.add('itree-droppable-target-above');
        }
        else if (dir === 1) {
            event.target.classList.add('itree-droppable-target-below');
        }
        else {
            event.target.classList.add('itree-droppable-target');
        }

        this.props.dom._tree.emit('node.dragover', event, dir);
    }

    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();

        this.unhighlightTarget(event.target);

        // Get the data from our transfer
        const treeId = event.dataTransfer.getData('treeId');
        const nodeId = event.dataTransfer.getData('nodeId');

        // Find the drop target
        const targetNode = this.props.node;

        // Skip if the node is the target
        if (nodeId === targetNode.id) {
            return;
        }

        // Skip if the target is a child of the dropped node
        let valid = true;
        targetNode.recurseUp((n) => valid = nodeId !== n.id);

        if (!valid) {
            return;
        }

        // Get the source tree, it may be another instance
        var sourceTree;
        if (treeId === this.props.dom._tree.id) {
            sourceTree = this.props.dom._tree;
        }
        else {
            sourceTree = document.querySelector('[data-uid="' + treeId + '"]').inspireTree;
        }

        var node = sourceTree.node(nodeId).remove(true);

        // Determine the insert direction
        var dir = this.getTargetDirection(event);

        // Get the index of the target node
        var targetIndex = targetNode.context().indexOf(targetNode);

        var newNode;
        var newIndex;
        if (dir === 0) {
            // Add as a child
            newNode = targetNode.addChild(node);

            // Cache the new index
            newIndex = targetNode.children.indexOf(newNode);

            // Auto-expand
            targetNode.expand();
        }
        else {
            // Determine the new index
            newIndex = dir === 1 ? ++targetIndex : targetIndex;

            // Insert and cache the node
            newNode = targetNode.context().insertAt(newIndex, node);
        }

        this.props.dom._tree.emit('node.drop', event, newNode, targetNode, newIndex);
    }

    unhighlightTarget(node) {
        if (node) {
            node.classList.remove(
                'itree-droppable-target-above',
                'itree-droppable-target-below',
                'itree-droppable-target',
                'itree-droppable-active'
            );
        }
    }

    renderCheckbox() {
        let node = this.props.node;

        if (this.props.dom.config.showCheckboxes) {
            return (<Checkbox
                checked={node.checked()}
                dom={this.props.dom}
                indeterminate={node.indeterminate()}
                node={node} />);
        }
    }

    renderChildren() {
        let { node, dom } = this.props;

        if (node.hasChildren()) {
            let nodes = node.children;
            let loading = dom.loading;
            let pagination = nodes.pagination();

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
        let node = this.props.node;
        let hasVisibleChildren = !this.props.dom.isDynamic ? node.hasVisibleChildren() : Boolean(node.children);

        if (hasVisibleChildren) {
            return <ToggleAnchor collapsed={node.collapsed()} node={node} />;
        }
    }

    render() {
        let node = this.props.node;

        let li = (<li
            draggable={this.props.dom.config.dragAndDrop}
            onDragEnd={this.onDragEnd.bind(this)}
            onDragEnter={this.onDragEnter.bind(this)}
            onDragLeave={this.onDragLeave.bind(this)}
            onDragOver={this.onDragOver.bind(this)}
            onDragStart={this.onDragStart.bind(this)}
            onDrop={this.onDrop.bind(this)}
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
