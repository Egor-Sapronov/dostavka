import AppDispatcher from '../AppDispatcher.js';
import PlacesConstants from '../constants/PlacesConstants.js';

let ActionTypes = PlacesConstants.ActionTypes;

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
    }
}