'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import RequestsList from './RequestsList.jsx.js';

class Requests extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <RequestsList />
                </div>
            </div>
        );
    }
}

export default Requests;

export function display(container) {
    return React.render(<Requests />, container);
}