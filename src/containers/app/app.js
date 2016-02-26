import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        const { children } = this.props;
        return (
            <div>
                <h1>Dostavka</h1>
                <ul>
                    <li><IndexLink to="/">catalog</IndexLink></li>
                    <li><Link to="/delivery">delivery</Link></li>
                    <li><Link to="/basket">basket</Link></li>
                </ul>
                { children }
            </div>
        );
    }
}
