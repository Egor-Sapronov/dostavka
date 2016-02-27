import React from 'react';
import styles from './cardsOfFood.css';
import Search from '../search/search';
import SumTable from '../sumTable/sumTable';

export default ({ itsBasket }) => {
    return (
        <div className={ styles.wrap }>
            { itsBasket ? null : <Search /> }
            { itsBasket ? <SumTable /> : null }
            <ul className={ styles.list }>
                <li className={ styles.card }>
                    <div alt="тут будет альт" className={ styles.photo }></div>
                    <div className={ styles.info }>
                        <p className={ styles.name }>Cola-Mui</p>
                        <span className={ styles.sum }>234<span className={ styles.rubl }>i</span></span>
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
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
                        { !itsBasket ? null
                            :
                          <div className={ styles.coll }>
                              <span className={ styles.coll_text }>кол-во: <span className={ styles.coll_count }>3 </span>шт.</span>
                          </div>
                        }
                    </div>
                    <div className={ styles.control }>
                        <div className={ styles.minus }>−</div>
                        <div className={ styles.plus }>+</div>
                    </div>
                </li>


            </ul>
            { itsBasket ? null
                : <div className={ styles.more }>
                    <a className={ styles.moreLink } href="">Хочу больше продуктов...</a>
                </div> }
        </div>
    );
};
