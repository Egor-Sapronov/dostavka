import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {putRequest, deleteRequest} from '../utils/webApiUtils.js';

let ActionTypes = AppConstants.ActionTypes;

export default {
    receiveRequests: function (requests) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_REQUESTS,
            requests: requests
        });
    },
    receiveRequest: function (request) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_REQUEST,
            request: request
        });
    },
    putRequest: function (request, places) {
        AppDispatcher.dispatch({
            type: ActionTypes.PUT_REQUEST,
            request: request,
            places: places
        });

        putRequest(request, places);
    },
    receiveUpdatedRequest: function (request) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_UPDATED_REQUEST,
            request: request
        });

        location.href = '/requests';
    },
    deleteRequest: function (id) {
        AppDispatcher.dispatch({
            type: ActionTypes.DELETE_REQUEST,
            id: id
        });
        deleteRequest(id);
    }
}
