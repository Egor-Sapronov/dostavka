import React from 'react';
import styles from './header.css';
import Cart from '../cart/cart';
import Search from '../search/search';

export default () => {
    return (
        <div className={ styles.wrap }>
            <div className={ styles.content }>
                <div className={ styles.contacts }>
                    <div className={ styles.icon_call }></div>
                    <div className={ styles.text_wrap }>
                        <p className={ styles.text }>звоните нам бесплатно:</p>
                        <p className={ styles.tell }>8-913-777-66-55</p>
                    </div>
                </div>
                <div className={ styles.auth }>
                    <a className={ styles.link }>
                        <div className={ styles.lk_icon }></div>
                        <span className={ styles.cont_text }>вход</span>
                    </a>
                    <a className={ styles.link }>
                        <div className={ styles.auth_icon }></div>
                        <span className={ styles.cont_text }>авторизация</span>
                    </a>
                </div>

                <Cart />
            </div>
            <Search />
        </div>
    );
};
