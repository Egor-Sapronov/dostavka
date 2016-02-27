import { RECEIVE_RUBRICS } from '../actions/api';
import { Map, List} from 'immutable';

export default (state = Map({rubrics: List()}), action) => {
    switch (action.type) {
        case RECEIVE_RUBRICS:
            return state.set('rubrics', List(action.result));
        default:
            return state;
    }
};
