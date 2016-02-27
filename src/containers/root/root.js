import React, { Component } from 'react';
import Delivery from '../delivery/delivery';
import App from '../app/app';
import Basket from '../../components/basket/basket';
import Content from '../../components/content/content';


import { browserHistory, Router, Route, IndexRoute } from 'react-router';

export default class Root extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute component={ Content } />
                    <Route path="delivery" component={ Delivery } />
                    <Route path="basket" component={ Basket } />
                </Route>
            </Router>
        );
    }
}
