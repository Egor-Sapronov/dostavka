import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import {getRequest} from '../utils/webApiUtils.js';


let ActionTypes = AppConstants.ActionTypes;

export default {
    createPlace: function (place) {
        AppDispatcher.dispatch({
            type: ActionTypes.CREATE_PLACE,
            place: place
        });
    },
    updatePlace: function (placeId, place) {
        AppDispatcher.dispatch({
            type: ActionTypes.UPDATE_PLACE,
            placeId: placeId,
            place: place
        });
    },
    deletePlace: function (placeId) {
        AppDispatcher.dispatch({
            type: ActionTypes.DELETE_PLACE,
            placeId: placeId
        });
    },
    getRequest: function (id) {
        AppDispatcher.dispatch({
            type: ActionTypes.GET_REQUEST,
            id: id
        });

        getRequest(id);
    },
    postRequest: function (data) {
        AppDispatcher.dispatch({
            type: ActionTypes.POST_REQUEST,
            data: data
        });
    }
}