import React, { Component, PropTypes } from 'react';
import Delivery from '../delivery/delivery';
import App from '../app/app';
import Basket from '../basket/basket';
import Content from '../content/content';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { requestProducts } from '../../actions/api';
import { connect } from 'react-redux';

export class Root extends Component {
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
    };

    render() {
        const { getProducts } = this.props;
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRoute onEnter={ () => getProducts() } component={ Content } />
                    <Route path="delivery" component={ Delivery } />
                    <Route path="rubrics/:rubricId" onEnter={ () => getProducts() } component={ Content } />
                    <Route path="basket" component={ Basket } />
                </Route>
            </Router>
        );
    }
}

export default connect(undefined, { getProducts: requestProducts })(Root);
