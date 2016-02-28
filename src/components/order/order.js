import React from 'react';
import styles from './order.css';

export default () => {
    return (
        <div className={ styles.wrap }>
            <div className={ styles.content }>
                <ul className={ styles.list }>
                    <li className={ styles.headerList }>Контакты</li>
                    <li className={ styles.name }> Имя: Пушкарская Дарья</li>
                    <li className={ styles.adress }> Адрес: Горская 9а, кв 43</li>
                    <li className={ styles.tell }> Телефон: 8-913-777-66-55</li>
                    <li className={ styles.email }> Email: d.pushkarskaya@2Gis.ru</li>
                    <li className={ styles.cash }> Способ оплаты: Безналичный</li>
                    <li className={ styles.cashStat }> Стату оплаты: Оплачено</li>
                </ul>
                <h1 className={ styles.title }>Заказ:</h1>

                <ul className={ styles.list }>
                    <li className={ styles.item }>
                        <span className={ styles.product }> Наименование: </span>
                        <span className={ styles.articl }> Артикл: </span>
                        <span className={ styles.price }> Цена(<span className={ styles.rubl }>i</span>):</span>
                    </li>
                    <li className={ styles.item }>
                        <span className={ styles.product }> Яблочко </span>
                        <span className={ styles.articl }> АРТ7263487623784623874628 </span>
                        <span className={ styles.price }> 200 <span className={ styles.rubl }>i</span></span>
                    </li>
                    <li className={ styles.item }>
                        <span className={ styles.product }> Яблочко </span>
                        <span className={ styles.articl }> АРТ7263487623784623874628 </span>
                        <span className={ styles.price }> 200 <span className={ styles.rubl }>i</span></span>
                    </li>
                    <li className={ styles.item }>
                        <span className={ styles.product }> Яблочко </span>
                        <span className={ styles.articl }> АРТ7263487623784623874628 </span>
                        <span className={ styles.price }> 200 <span className={ styles.rubl }>i</span></span>
                    </li>
                    <li className={ styles.item }>
                        <span className={ styles.product }> Яблочко </span>
                        <span className={ styles.articl }> АРТ7263487623784623874628 </span>
                        <span className={ styles.price }> 200 <span className={ styles.rubl }>i</span></span>
                    </li>
                    <li className={ styles.item }>
                        <span className={ styles.product }> Яблочко </span>
                        <span className={ styles.articl }> АРТ7263487623784623874628 </span>
                        <span className={ styles.price }> 200 <span className={ styles.rubl }>i</span></span>
                    </li>

                </ul>
            </div>
        </div>
    );
};
