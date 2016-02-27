import React from 'react';
import styles from './category.css';
import { Link, IndexLink } from 'react-router';

export default ({rubrics}) => {
    return (
                <div className={ styles.wrap }>
                    <ul className={ styles.list }>
                        <IndexLink to="/" ><li className={ styles.category }>All</li></IndexLink>
                        { rubrics.map(rubric => {
                            return (
                                    <Link to={`/rubrics/${rubric._id}`} key={ rubric._id }>
                                        <li className={ styles.category }>{ rubric.title }</li>
                                    </Link>
                                    );
                        }) }
                    </ul>
                </div>
            );
};
