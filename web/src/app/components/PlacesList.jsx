'use strict';

import React, {Component} from 'react';
import PlacesActionCreates from '../actions/PlacesActionCreators.js';
import PlacesStore from '../stores/PlacesStore.js';
import PlaceListItem from './PlaceListItem.jsx'

class PlacesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: PlacesStore.getPlaces(),
            price: PlacesStore.countPrice()
        };
    }

    componentDidMount() {
        PlacesStore.addChangeListener(this.handleStoreChange.bind(this));
    }

    componentWillUnmount() {
        PlacesStore.removeChangeListener(this.handleStoreChange.bind(this));
    }

    render() {
        return (
            <div>
                <h1>{this.state.price + ' Руб'}</h1>
                {this.state.places.map((place, index) => {
                    return <PlaceListItem {...place} placeId={index} key={index} />
                })}
            </div>
        );
    }

    handleStoreChange() {
        this.setState({
            places: PlacesStore.getPlaces(),
            price: PlacesStore.countPrice()
        });
    }
}

export default PlacesList;