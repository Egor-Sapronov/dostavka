import React from 'react';
import styles from './cardsOfFood.css';
import Search from '../search/search';
import SumTable from '../sumTable/sumTable';

export default ({products, itsBasket}) => {
    return (
        <div className={ styles.wrap }>
            { itsBasket ? null : <Search /> }
            { itsBasket ? <SumTable /> : null }
            <ul className={ styles.list }>
                { products.map(product => {
                    return (
                        <li key={ product._id } className={ styles.card }>
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
                }) }
            </ul>
        </div>
    );
};
