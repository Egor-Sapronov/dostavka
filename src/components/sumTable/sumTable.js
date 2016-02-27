import React from 'react';
import styles from './sumTable.css';

export default () => {
    return (
        <div className={ styles.wrap }>
            <div className={ styles.content }>
                <span className={ styles.text }>сумма вашего заказа: </span>
                <span className={ styles.sum }> 2999 <span className={ styles.rubl }>i</span></span>
                <span className={ styles.goToOrder } href="#createOrder">оформить заказ</span>
            </div>

        </div>
    );
};
