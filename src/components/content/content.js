import React from 'react';
import styles from './content.css';
import Category from '../category/category';
import CardsOfFood from '../cardsOfFood/cardsOfFood';

export default () => {
    return (
        <div className={ styles.wrap }>
            <Category />
            <CardsOfFood />
        </div>
    );
};
