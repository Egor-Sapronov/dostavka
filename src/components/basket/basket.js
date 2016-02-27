import React from 'react';
import styles from './basket.css';
import CardsOfFood from '../cardsOfFood/cardsOfFood';
import OrderForm from '../orderForm/orderForm';

export default () => {
    return (
        <div className={ styles.wrap }>
            <CardsOfFood itsBasket />

            <OrderForm />
        </div>
    );
};
