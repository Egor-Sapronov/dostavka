import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './header.css';
import Cart from '../../components/cart/cart';
import select from './select';

export class Header extends Component {
    static propTypes = {
        productsCount: PropTypes.func,
    };
    render() {
        return (
            <div className={ styles.wrap }>
                <div className={ styles.content }>
                    <div className={ styles.contacts }>
                        <div className={ styles.icon_call }></div>
                        <div className={ styles.text_wrap }>
                            <p className={ styles.text }>позвоните нам:</p>
                            <a className={ styles.tell } href="tel:+79039056206">8-903-905-62-06</a>
                        </div>
                    </div>
                    <div className={ styles.auth }>
                        <span className={ styles.cont_text }>Доставка продуктов по г. Новосибирск</span>
                        <p className={ styles.cont_text_min }><sup>*</sup>Этот проект создан на Hackathon Novosibirsk от
                            2Gis</p>
                    </div>
                    <Cart CountProd={ this.props.productsCount }/>
                </div>
            </div>
        );
    }
};

export default connect(select)(Header);
