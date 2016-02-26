import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Header from '../../components/header/header';
import Content from '../../components/content/content';



export default class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}
