import React from 'react';
import styles from './cardsOfFood.css';
import Card from '../card/card';

export default ({ products, onAdd, onRemove }) => {
    return (
        <div className={ styles.wrap }>
            <ul className={ styles.list }>
                { products.map(product => {
                    return <Card onRemove={ onRemove } onAdd={ onAdd } key={ product._id } product={ product } />;
                }) }
            </ul>
        </div>
    );
};
