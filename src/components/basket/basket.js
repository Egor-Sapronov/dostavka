import React from 'react';
import styles from './basket.css';
import CardsOfFood from '../cardsOfFood/cardsOfFood';


export default () => {
    return (
        <div className={ styles.wrap }>
            <CardsOfFood itsBasket={ true } />
        </div>
    );
};
