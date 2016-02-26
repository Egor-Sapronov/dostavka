import React from 'react';
import styles from './content.css';
import Category from '../category/category';

export default () => {
    return (
        <div className={ styles.wrap }>
            <Category />
        </div>
    );
};
