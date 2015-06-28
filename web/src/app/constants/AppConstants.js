'use strict';

import keyMirror from '../utils/keyMirror.js';

export default {
    ActionTypes: keyMirror({
        CREATE_PLACE: null,
        UPDATE_PLACE: null,
        DELETE_PLACE: null,
        POST_REQUEST: null,
        GET_REQUESTS: null,
        RECEIVE_REQUESTS: null,
        GET_REQUEST: null,
        RECEIVE_REQUEST: null
    })
}