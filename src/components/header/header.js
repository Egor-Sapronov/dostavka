import React from 'react';
import styles from './header.css';
import Cart from '../cart/cart';

export default () => {
    return (
        <div className={ styles.wrap }>
            <div className={ styles.contacts }></div>
            <Cart />
        </div>
    );
};
