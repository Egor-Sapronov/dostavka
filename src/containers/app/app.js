import React, { Component, PropTypes } from 'react';
import Header from '../header/header';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        const { children } = this.props;

        return (
            <div>
                <Header />
                { children }
            </div>
        );
    }
}

