import React from 'react';
import styles from './cardsOfFood.css';
import Search from '../search/search';

export default () => {
    return (
        <div className={ styles.wrap }>
            <Search />
            <ul className={ styles.list }>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>
            </ul>
            <div className={ styles.more }>
                <a className={ styles.moreLink } href="">Хочу больше продуктов...</a>
            </div>
        </div>
    );
};
