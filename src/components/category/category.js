import React from 'react';
import styles from './category.css';

export default () => {
    return (
        <div className={ styles.wrap }>
            <ul className={ styles.list }>
                <li className={ styles.title }>категории:</li>
                <li className={ styles.category }>категория1</li>
                <li className={ styles.category }>категория2</li>
                <li className={ styles.category }>категория3</li>
            </ul>
        </div>
);
};
