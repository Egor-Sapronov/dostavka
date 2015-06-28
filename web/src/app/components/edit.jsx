'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import PlacesList from './PlacesList.jsx';
import PlacesActionCreates from '../actions/PlacesActionCreators.js';
import AppServerActionsCreators from '../actions/AppServerActionsCreators.js';
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
                    <button className='btn btn-primary' onClick={this.handleAdd}>Add</button>
                    <button className='btn btn-success' onClick={this.handleSave}>Save</button>
                </div>
            </div>
        );
    }

    handleAdd() {
        PlacesActionCreates.createPlace({});
    }

    handleSave() {
        AppServerActionsCreators.putRequest(RequestsStore.getRequest(), PlacesStore.getPlaces());
    }
}

export default Edit;

export function display(container) {
    return React.render(<Edit />, container);
}