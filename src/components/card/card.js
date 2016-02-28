import React from 'react';
import styles from './card.css';

export default ({ product, onAdd, onRemove, inBasket }) => {
    return (
        <li className={ styles.wrap }>
            <div alt="тут будет альт" className={ styles.photo } style={{background: `#fff url(${product.img}) center no-repeat`, backgroundSize: '258px' }}></div>
            <div className={ styles.info }>
                <p className={ styles.name }>{product.title}</p>
                <span className={ styles.sum }>{product.price}<span className={ styles.rubl }>i</span></span>
            </div>
            <div className={ styles.control }>
                { product.inBasket > 0 ? <div className={ styles.minus } onClick={ () => onRemove(product._id) }>−</div> : null }
                <div className={ styles.plus } onClick={ () => onAdd(product._id) }>+</div>
            </div>
            { product.inBasket > 0 ? <div className={ styles.coll }> { product.inBasket } </div> : null }
        </li>
    );
};
