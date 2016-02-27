import styles from './content.css';
import Category from '../../components/category/category';
import CardsOfFood from '../../components/cardsOfFood/cardsOfFood';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestRubrics } from '../../actions/api';
import select from './select';
import Search from '../../components/search/search';


export class Content extends Component {
    static propTypes = {
        requestRubrics: PropTypes.func.isRequired,
        products: PropTypes.array,
        rubrics: PropTypes.array,
    };

    componentWillMount() {
        this.props.requestRubrics();
    }

    render() {
        const { rubrics, products } = this.props;
        return (
            <div className={ styles.wrap }>

                <Category rubrics={ rubrics } />
                <Search />

                <CardsOfFood products={ products } />
            </div>
        );
    }
}

export default connect(select, { requestRubrics })(Content);
