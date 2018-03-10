import Component from 'inferno-component';
import ListItem from './list-item';
import stateComparator from '../lib/state-comparator';

export default class List extends Component {
    shouldComponentUpdate(nextProps) {
        return _.find(nextProps.nodes, 'itree.dirty') || stateComparator(this.props, nextProps);
    }

    isDeferred() {
        return this.props.dom.config.deferredRendering || this.props.dom._tree.config.deferredLoading;
    }

    loadMore(event) {
        event.preventDefault();
        if (this.props.context) {
            this.props.context.loadMore(event);
        }
        else {
            this.props.dom._tree.loadMore(event);
        }
    }

    renderLoadMoreNode() {
        return (<li className='leaf detached'>
            <a className='title icon icon-more load-more' onClick={this.loadMore.bind(this)}>Load More</a>
        </li>);
    }

    renderLoadingTextNode() {
        return (<li className='leaf'>
            <span className='title icon icon-more'>Loading...</span>
        </li>);
    }

    render() {
        let renderNodes = this.props.nodes;
        let pagination = renderNodes.pagination();

        // If rendering deferred, chunk the nodes client-side
        if (this.props.dom.config.deferredRendering) {
            // Filter non-hidden/removed nodes and limit by this context's pagination
            let count = 0;
            renderNodes = this.props.nodes.filter((n) => {
                let matches = !(n.hidden() || n.removed());

                if (matches) {
                    count++;
                }

                return count <= pagination.limit && matches;
            });
        }

        // Render nodes as list items
        let items = _.map(renderNodes, (node) => {
            return <ListItem dom={this.props.dom} key={node.id} node={node} />;
        });

        if (this.isDeferred() && pagination.limit < pagination.total) {
            if (!this.props.loading) {
                items.push(this.renderLoadMoreNode());
            }
            else {
                items.push(this.renderLoadingTextNode());
            }
        }

        return <ol>{ items }{ this.props.children }</ol>;
    }
}
