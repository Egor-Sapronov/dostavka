'use strict';

import EventEmitter from 'eventemitter3';
import Immutable from 'immutable';
import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {postRequest} from '../utils/webApiUtils.js';

let ActionTypes = AppConstants.ActionTypes;

const CHANGE_EVENT = 'change';
const PLACE_PRICE = 150;

class PlacesStore extends EventEmitter {
    constructor() {
        super();

        this.places = Immutable.List();
        this.count = 0;
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
                case ActionTypes.POST_REQUEST:
                    postRequest(action.data)
                        .then((result)=> {
                            location.href='/info?order='+result.orderId;
                        });
                    break;
                case ActionTypes.RECEIVE_REQUEST:
                    this.places = Immutable.List(action.request.places.map(function (item) {
                        this.count += 1;
                        item.reactId = this.count;
                        return item;
                    }.bind(this)));
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
        this.count += 1;
        place.reactId = this.count;
        this.places = this.places.push(place);
    }

    updatePlace(placeId, place) {
        this.places = this.places.set(placeId, place);
    }

    deletePlace(placeId) {
        this.places = this.places.delete(placeId);
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
