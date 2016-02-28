import { RECEIVE_FROM_BASKET } from '../actions/basket';
import { Map, List } from 'immutable';

const initialState = {
    productsInBasket: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_FROM_BASKET:
            return {
                productsInBasket: action.result
            };
        default:
            return state;
    }
};
