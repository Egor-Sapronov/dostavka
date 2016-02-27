import { RECEIVE_RUBRICS, RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from '../actions/api';
import { Map, List} from 'immutable';

const initialState = Map({
    rubrics: List(),
    products: List(),
});

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return state.set('rubricId', action.rubricId);
        case RECEIVE_RUBRICS:
            return state.set('rubrics', List(action.result));
        case RECEIVE_PRODUCTS:
            return state.set('products', List(action.result));
        default:
            return state;
    }
};
