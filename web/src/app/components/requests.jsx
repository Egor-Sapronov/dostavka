'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import RequestsList from './RequestsList.jsx.js';
import RequestsActionsCreators from '../actions/RequestsActionsCreators.js';

class Requests extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className='input-group'>
                      <span className='input-group-addon'>
                          <span className='glyphicon glyphicon-search'></span>
                      </span>
                      <input type="text" className="form-control" onChange={this.handleSearchInput} placeholder='Номер заказа' />
                    </div>
                    <br/>
                    <RequestsList />
                </div>
            </div>
        );
    }

    handleSearchInput(e) {
      RequestsActionsCreators.getRequests({order:e.target.value});
    }
}

export default Requests;

export function display(container) {
    return React.render(<Requests />, container);
}
