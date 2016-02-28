import React from 'react';
import styles from './cart.css';

export default ({ CountProd }) => {
    console.log('HEY');
    console.log(CountProd);
    return (
        <div className={ styles.wrap }>
            <div className={ styles.counter }>{ CountProd }</div>
        </div>
    );
};
