import blankNode from '../lib/blank-node';
import Component from 'inferno-component';
import List from './list';

export default class Tree extends Component {
    add() {
        this.props.dom._tree.focused().blur();

        this.props.dom._tree.addNode(blankNode());
    }

    renderAddLink() {
        if (this.props.dom._tree.config.editing.add) {
            return <li><a className='btn icon icon-plus' onClick={this.add.bind(this)} title='Add a new root node'></a></li>;
        }
    }

    render() {
        let { dom, nodes } = this.props;
        let loading = dom.loading;
        let pagination = nodes.pagination();

        return (<List
            dom={dom}
            limit={pagination.limit}
            loading={loading}
            nodes={nodes}
            total={pagination.total}>{ this.renderAddLink() }</List>);
    }
}
