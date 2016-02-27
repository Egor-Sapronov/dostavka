import styles from './basket.css';
import React, { Component } from 'react';
import SumTable from '../../components/sumTable/sumTable';
import OrderForm from '../../components/orderForm/orderForm';

export default class Basket extends Component {
    static propTypes = {
    };

    componentWillMount() {
    }

    render() {
        return (
            <div className={ styles.wrap }>
                <SumTable />
                <OrderForm />
            </div>
        );
    }
}
