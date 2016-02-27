import styles from './content.css';
import Category from '../../components/category/category';
import CardsOfFood from '../../components/cardsOfFood/cardsOfFood';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestRubrics } from '../../actions/api';
import select from './select';
import Search from '../../components/search/search';
import { addToBasket, removeFromBasket } from '../../actions/basket';

export class Content extends Component {
    static propTypes = {
        requestRubrics: PropTypes.func.isRequired,
        products: PropTypes.array,
        rubrics: PropTypes.array,
        addProduct: PropTypes.func.isRequired,
        removeProduct: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.requestRubrics();
    }

    render() {
        const { rubrics, products, addProduct, removeProduct } = this.props;
        return (
            <div className={ styles.wrap }>

                <Category rubrics={ rubrics } />
                <Search />

                <CardsOfFood onRemove={ removeProduct } onAdd={ addProduct } products={ products } />
            </div>
        );
    }
}

export default connect(select, { requestRubrics, addProduct: addToBasket, removeProduct: removeFromBasket })(Content);
