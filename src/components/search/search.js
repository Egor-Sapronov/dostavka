import React from 'react';
import styles from './search.css';

export default () => {
    return (
        <div className={ styles.wrap }>
            <div className={ styles.button }></div>
            <input className={ styles.input } type="search" placeholder="найди свои яблочки..." />
        </div>
    );
};
