import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

let ActionTypes = AppConstants.ActionTypes;

export default {
    receiveRequests: function (requests) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_REQUESTS,
            requests: requests
        });
    }
}