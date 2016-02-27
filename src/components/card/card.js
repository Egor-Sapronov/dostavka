import React from 'react';
import styles from './card.css';

export default ({ product }) => {
    return (
        <li className={ styles.card }>
            <div alt="тут будет альт" className={ styles.photo } style={{background: `#fff url(${product.img}) center no-repeat` }}></div>
            <div className={ styles.info }>
                <p className={ styles.name }>{product.title}</p>
                 <span className={ styles.sum }>{product.price}<span className={ styles.rubl }>i</span></span>
                <div className={ styles.coll }>
                    <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>0 </span>шт.</span>
                </div>
            </div>
            <div className={ styles.control }>
                <div className={ styles.minus }>−</div>
                <div className={ styles.plus }>+</div>
            </div>
        </li>
    );
};
