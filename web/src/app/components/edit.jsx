'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import PlacesList from './PlacesList.jsx';
import PlacesActionCreates from '../actions/PlacesActionCreators.js';
import PlacesStore from '../stores/PlacesStore.js';
import RequestsStore from '../stores/RequestsStore.js';
import EditRequest from './EditRequest.jsx';

class Edit extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <EditRequest />
                    <PlacesList />
                    <button className='btn btn-primary' onClick={this.handleAdd.bind(this)} >Add</button>
                </div>
            </div>
        );
    }

    handleAdd() {
        PlacesActionCreates.createPlace({});
    }
}

export default Edit;

export function display(container) {
    return React.render(<Edit />, container);
}