'use strict';

import EventEmitter from 'eventemitter3';
import Immutable from 'immutable';
import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

let ActionTypes = AppConstants.ActionTypes;

const CHANGE_EVENT = 'change';

class PlacesStore extends EventEmitter {
    constructor() {
        super();

        this.requests = Immutable.List();

        this.dispatchToken = AppDispatcher.register((action)=> {
            switch (action.type) {
                case ActionTypes.RECEIVE_REQUESTS:
                    this.requests = Immutable.List(action.requests);
                    this.emitChange();
                    break;
                default:
            }
        });
    }

    getRequests() {
        return this.requests.toArray();
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

export default new PlacesStore();