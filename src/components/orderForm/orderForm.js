import React from 'react';
import styles from './orderForm.css';

export default () => {
    return (
        <div className={ styles.wrap } id="createOrder">
            <div className={ styles.content }>
                <div className={ styles.inputWrap }>
                    <input className={ styles.input } type="text" id="name" placeholder="Пушкарская Дарья ..."></input>
                </div>
                <div className={ styles.inputWrap }>
                    <input className={ styles.input } type="tel" id="tel" placeholder="8-913- ..."></input>
                </div>
                <div className={ styles.inputWrap }>
                    <input className={ styles.input } type="text" id="email" placeholder="email@2Gis.ru"></input>
                </div>
                <div className={ styles.inputWrap }>
                    <input className={ styles.input } type="text" id="adress" placeholder="Горская 9а, кв 46"></input>
                </div>
                <div className={ styles.inputWrap }>
                    <div className={ styles.forInput }>Дата и время доставки: </div>
                    <input type="date" defaultValue = "2016-01-02" min="2016-01-01" max="2016-12-30" className={ styles.dataInput } id="datatime" ></input>
                    <input type="time" defaultValue = "12:00" min="08:00" max="23:00" className={ styles.timeInput } id="datatime" ></input>
                </div>
                <p className={ styles.helpText }><sup>*</sup>Время доставки варьируется в р-не часа</p>

                <label className={ styles.forInput }>Способ оплаты: </label>

                <input type="radio" name="cash" id="cash1" className={ styles.radio }/>
                    <label htmlFor="cash1" className={ styles.laberForRadio }><span className={ styles.newRadio }></span>Наличный</label>
                <input type="radio" name="cash" id="cash2" className={ styles.radio }/>
                    <label htmlFor="cash2" className={ styles.laberForRadio }><span className={ styles.newRadio }></span>Безаличный</label>

                <div className={ styles.goToOrder } href="#">оформить заказ</div>
            </div>
        </div>
    );
};
