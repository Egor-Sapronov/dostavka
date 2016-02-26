import React, { Component } from 'react';
import Delivery from '../delivery/delivery';
import App from '../app/app';
import Catalog from '../catalog/catalog';
import Basket from '../basket/basket';

import { browserHistory, Router, Route, IndexRoute } from 'react-router';

export default class Root extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute component={ Catalog } />
                    <Route path="delivery" component={ Delivery } />
                    <Route path="basket" component={ Basket } />
                </Route>
            </Router>
        );
    }
}
