import Component from 'inferno-component';
import Inferno from 'inferno';

export default class EmptyList extends Component {
    render() {
        return (<ol><li className='leaf'>
            <span className='title icon icon-file-empty empty'>{ this.props.text }</span>
        </li></ol>);
    }
}
