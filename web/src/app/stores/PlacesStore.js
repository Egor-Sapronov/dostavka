'use strict';

import EventEmitter from 'eventemitter3';
import Immutable from 'immutable';
import AppDispatcher from '../AppDispatcher.js';
import PlacesConstants from '../constants/PlacesConstants.js';

let ActionTypes = PlacesConstants.ActionTypes;

const CHANGE_EVENT = 'change';
const PLACE_PRICE = 150;

class PlacesStore extends EventEmitter {
    constructor() {
        super();

        this.places = Immutable.List();

        this.dispatchToken = AppDispatcher.register((action)=> {
            switch (action.type) {
                case ActionTypes.CREATE_PLACE:
                    this.addPlace(action.place);
                    this.emitChange();
                    break;
                case ActionTypes.UPDATE_PLACE:
                    this.updatePlace(action.placeId, action.place);
                    this.emitChange();
                    break;
                case ActionTypes.DELETE_PLACE:
                    this.deletePlace(action.placeId);
                    this.emitChange();
                    break;
                default:
            }
        });
    }

    countPrice() {
        return this.places.size * PLACE_PRICE;
    }

    addPlace(place) {
        this.places = this.places.push(place);
    }

    updatePlace(placeId, place) {
        this.places = this.places.set(placeId, place);
    }

    deletePlace(placeId) {
        this.places = this.places.remove(placeId);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getPlaces() {
        return this.places.toArray();
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

export default new PlacesStore();