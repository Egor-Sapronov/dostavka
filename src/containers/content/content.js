import styles from './content.css';
import Category from '../../components/category/category';
import CardsOfFood from '../../components/cardsOfFood/cardsOfFood';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestRubrics, searchProducts } from '../../actions/api';
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
        searchData: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    componentWillMount() {
        this.props.requestRubrics();
    }

    search(event) {
        this.props.searchData(event.target.value);
    }

    render() {
        const { rubrics, products, addProduct, removeProduct } = this.props;
        return (
            <div className={ styles.wrap }>

                <Category rubrics={ rubrics } />
                <Search onSearch={ this.search } />

                <CardsOfFood onRemove={ removeProduct } onAdd={ addProduct } products={ products } />
            </div>
        );
    }
}

export default connect(select, {
    requestRubrics,
    addProduct: addToBasket,
    removeProduct: removeFromBasket,
    searchData: searchProducts,
})(Content);
