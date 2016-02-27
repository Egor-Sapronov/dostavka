import { RECIEVE_FROM_BASKET } from '../actions/basket';
import { Map, List} from 'immutable';

const initialState = Map({
    products: List(),
});

export default (state = initialState, action) => {
    switch (action.type) {
        case RECIEVE_FROM_BASKET:
            return state.set('products', action.result);
        default:
            return state;
    }
};
