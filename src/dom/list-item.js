import Checkbox from './checkbox';
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
        let attributes = node.itree.li.attributes;

        // Set state classnames
        let classNames = [];

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

        classNames.push(node.children ? 'folder' : 'leaf');

        // Append any custom class names
        let customClasses = attributes.class || attributes.className;
        if (_.isFunction(customClasses)) {
            customClasses = customClasses(node);
        }

        // Append content correctly
        if (!_.isEmpty(customClasses)) {
            if (_.isString(customClasses)) {
                // Support periods for backwards compat with hyperscript-formatted classes
                classNames = classNames.concat(customClasses.split(/[\s\.]+/));
            }
            else if (_.isArray(customClasses)) {
                classNames = classNames.concat(customClasses);
            }
        }

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

        let li = (<li {...this.getAttributes()} ref={domNode => this.props.node.itree.ref = domNode}>
            { this.renderEditToolbar() }
            <div className='title-wrap'>
                { this.renderToggle() }
                { this.renderCheckbox() }
                <NodeAnchor
                    dom={this.props.dom}
                    editing={node.editing()}
                    expanded={node.expanded()}
                    hasOrWillHaveChildren={Boolean(node.children)}
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
