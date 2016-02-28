import styles from './order.css';
import React, { Component } from 'react';
import Order from '../../components/order/order';

export default class Basket extends Component {
    static propTypes = {
    };

    componentWillMount() {
    }

    render() {
        return (
            <div className={ styles.wrap }>
                <Order />
            </div>
        );
    }
}
