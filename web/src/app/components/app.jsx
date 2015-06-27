'use strict';

import React, {Component} from 'react';
import Header from './header.jsx';
import PlacesList from './PlacesList.jsx';
import PlacesActionCreates from '../actions/PlacesActionCreators.js';
import PlacesStore from '../stores/PlacesStore.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <PlacesList />
                    <button className='btn btn-primary' onClick={this.handleAdd.bind(this)} >Add</button>
                    <button className='btn btn-success' onClick={this.handleSubmit.bind(this)} >Submit</button>
                </div>
            </div>
        );
    }

    handleAdd() {
        PlacesActionCreates.createPlace({});
    }

    handleSubmit() {
        PlacesActionCreates.postRequest({
            places: PlacesStore.getPlaces()
        });
        console.log(PlacesStore.getPlaces());
    }
}

export default App;

export function display(container) {
    return React.render(<App />, container);
}