import AppDispatcher from '../AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

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
    postRequest: function (data) {
        AppDispatcher.dispatch({
            type: ActionTypes.POST_REQUEST,
            data: data
        });
    }
}