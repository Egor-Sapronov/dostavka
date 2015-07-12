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
                    <div className='btn-group'>
                      <button className='btn btn-default' onClick={this.handleAdd.bind(this)}>Добавить адрес</button>
                      <button className='btn btn-primary' onClick={this.handleSubmit.bind(this)}>Создать заявку</button>
                    </div>
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
    }
}

export default App;

export function display(container) {
    return React.render(<App />, container);
}
