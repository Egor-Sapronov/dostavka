import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {getRequests} from '../utils/webApiUtils.js';

let ActionTypes = AppConstants.ActionTypes;

export default {
    getRequests: function (options) {
        AppDispatcher.dispatch({
            type: ActionTypes.GET_REQUESTS,
            options: options ? options : {}
        });

        getRequests(options ? options : {});
    },
    setStatus: function (status) {
        AppDispatcher.dispatch({
            type: ActionTypes.SET_STATUS,
            status: status
        });
    }
};
