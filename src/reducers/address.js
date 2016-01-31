import { RECEIVE_SEARCH, ADD_ADDRESS, SELECT_ADDRESS } from '../actions/address';
import { Map, List} from 'immutable';

export default (state = Map(), action) => {
    switch (action.type) {
        case SELECT_ADDRESS:
            return state.set(action.uuid, Map({selected: Map(action.address)}));
        case ADD_ADDRESS:
            return state.set(action.uuid, Map());
        case RECEIVE_SEARCH:
            return state.set(action.uuid, Map({items: List(action.result)}));
        default:
            return state;
    }
};
