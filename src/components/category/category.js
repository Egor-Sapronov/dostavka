import React, { Component } from 'react';
import styles from './category.css';
import { Link, IndexLink } from 'react-router';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handelClick= this.handelClick.bind(this);
    }

    handelClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className={ styles.wrap }>
                <div onClick={ this.handelClick } className={ styles.toggle }><div className={ this.state.isOpen ? styles.arrowOpen : styles.arrowClose }></div></div>
                <ul className={ this.state.isOpen ? styles.listOpen : styles.listClose }>
                    <li className={ styles.category }>
                        <IndexLink className={ styles.link } to="/">
                            Все
                        </IndexLink>
                    </li>
                    { this.props.rubrics.map(rubric => {
                        return (
                            <li className={ styles.category }>
                                <Link className={ styles.link } to={`/rubrics/${rubric._id}`} key={ rubric._id }>
                                    { rubric.title }
                                </Link>
                            </li>
                        );
                    }) }
                </ul>
            </div>
        );
    }
}
