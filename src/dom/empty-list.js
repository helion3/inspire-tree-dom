import { Component } from 'inferno';

export default class EmptyList extends Component {
    render() {
        return (<ol><li className='leaf first last only'>
            <span className='title icon icon-file-empty empty'>{ this.props.text }</span>
        </li></ol>);
    }
}
