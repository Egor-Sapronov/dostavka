import React from 'react';
import styles from './search.css';

export default ({onSearch}) => {
    return (
        <div className={ styles.wrap }>
            <div className={ styles.button }></div>
            <input onChange={ onSearch } className={ styles.input } type="text" placeholder="найди свои яблочки..." />
        </div>
    );
};
