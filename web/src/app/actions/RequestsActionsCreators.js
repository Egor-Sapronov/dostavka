import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {getRequests} from '../utils/webApiUtils.js';

let ActionTypes = AppConstants.ActionTypes;

export default {
    getRequests: function () {
        AppDispatcher.dispatch({
            type: ActionTypes.GET_REQUESTS
        });

        getRequests();
    }
}