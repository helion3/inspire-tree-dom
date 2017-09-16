import Component from 'inferno-component';
import Inferno from 'inferno';
import stateComparator from '../lib/state-comparator';

export default class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.getStateFromNodes(props.node);
    }

    getStateFromNodes(node) {
        return {
            text: node.text
        };
    }

    componentWillReceiveProps(data) {
        this.setState(this.getStateFromNodes(data.node));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return stateComparator(this.state, nextState);
    }

    click(event) {
        // Define our default handler
        let handler = () => {
            this.props.node.toggleCheck();
        };

        // Emit an event with our forwarded MouseEvent, node, and default handler
        this.props.dom._tree.emit('node.click', event, this.props.node, handler);

        // Unless default is prevented, auto call our default handler
        if (!event.treeDefaultPrevented) {
            handler();
        }
    }

    keypress(event) {
        if (event.which === 13) {
            return this.save();
        }
    }

    input(event) {
        this.setState({
            text: event.target.value
        });
    }

    cancel(event) {
        if (event) {
            event.stopPropagation();
        }

        this.props.node.toggleEditing();
    }

    save(event) {
        if (event) {
            event.stopPropagation();
        }

        // Cache current text
        var originalText = this.props.node.text;
        var newText = this.ref.value;

        // Update the text
        this.props.node.set('text', newText);

        // Disable editing and update
        this.props.node.state('editing', false);
        this.props.node.markDirty();
        this.props.dom._tree.applyChanges();

        if (originalText !== newText) {
            this.props.dom._tree.emit('node.edited', this.props.node, originalText, newText);
        }
    }

    render() {
        return (<form onsubmit={event => event.preventDefault}>
            <input
                onClick={event => event.stopPropagation}
                onInput={this.input.bind(this)}
                onKeyPress={this.keypress.bind(this)}
                ref={elem => this.ref = elem}
                value={this.state.text} />
            <span className='btn-group'>
                <button className='btn icon icon-check' onClick={this.save.bind(this)} title='Save' type='button'></button>
                <button className='btn icon icon-cross' onClick={this.cancel.bind(this)} title='Cancel' type='button'></button>
            </span>
        </form>);
    }
}
