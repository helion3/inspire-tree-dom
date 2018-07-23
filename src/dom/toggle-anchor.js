import { Component } from 'inferno';

export default class ToggleAnchor extends Component {
    className() {
        return 'toggle icon ' + (this.props.collapsed ? 'icon-expand' : 'icon-collapse');
    }

    render() {
        return <a className={this.className()} onClick={this.props.node.toggleCollapse.bind(this.props.node)} />;
    }
}
