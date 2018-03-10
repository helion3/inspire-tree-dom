import classlist from '../lib/classlist';
import Component from 'inferno-component';
import EditForm from './edit-form';

export default class NodeAnchor extends Component {
    blur() {
        this.props.node.blur();
    }

    click(event) {
        let { node, dom } = this.props;

        // Define our default handler
        let handler = () => {
            event.preventDefault();

            if (this.props.editing) {
                return;
            }

            if (event.metaKey || event.ctrlKey || event.shiftKey) {
                dom._tree.disableDeselection();
            }

            if (event.shiftKey) {
                dom.clearSelection();

                let selected = dom._tree.lastSelectedNode();
                if (selected) {
                    dom._tree.selectBetween.apply(dom._tree, dom._tree.boundingNodes(selected, node));
                }
            }

            if (node.selected()) {
                if (!dom._tree.config.selection.disableDirectDeselection) {
                    node.deselect();
                }
            }
            else {
                node.select();
            }

            dom._tree.enableDeselection();
        };

        // Emit an event with our forwarded MouseEvent, node, and default handler
        dom._tree.emit('node.click', event, node, handler);

        // Unless default is prevented, auto call our default handler
        if (!event.treeDefaultPrevented) {
            handler();
        }
    }

    contextMenu(event) {
        let { node, dom } = this.props;

        dom._tree.emit('node.contextmenu', event, node);
    }

    dblclick(event) {
        let { node, dom } = this.props;

        // Define our default handler
        let handler = () => {
            // Clear text selection which occurs on double click
            dom.clearSelection();

            node.toggleCollapse();
        };

        // Emit an event with our forwarded MouseEvent, node, and default handler
        dom._tree.emit('node.dblclick', event, node, handler);

        // Unless default is prevented, auto call our default handler
        if (!event.treeDefaultPrevented) {
            handler();
        }
    }

    focus(event) {
        this.props.node.focus(event);
    }

    mousedown() {
        if (this.props.dom.isDragDropEnabled) {
            this.props.dom.isMouseHeld = true;
        }
    }

    render() {
        let node = this.props.node;
        let attributes = _.clone(node.itree.a.attributes) || {};
        attributes.tabindex = 1;
        attributes.unselectable = 'on';

        // Build and set classnames
        let classNames = classlist(node, 'a').concat(['title', 'icon']);

        if (!this.props.dom.config.showCheckboxes) {
            let folder = this.props.expanded ? 'icon-folder-open' : 'icon-folder';
            classNames.push(node.itree.icon || (this.props.hasOrWillHaveChildren ? folder : 'icon-file-empty'));
        }

        attributes.class = attributes.className = classNames.join(' ');

        let content = node.text;
        if (node.editing()) {
            content = <EditForm dom={this.props.dom} node={this.props.node} />;
        }

        return (<a
            data-uid={node.id}
            onBlur={this.blur.bind(this)}
            onClick={this.click.bind(this)}
            onContextMenu={this.contextMenu.bind(this)}
            onDblClick={this.dblclick.bind(this)}
            onFocus={this.focus.bind(this)}
            onMouseDown={this.mousedown.bind(this)}
            {...attributes}>{ content }</a>);
    }
}
