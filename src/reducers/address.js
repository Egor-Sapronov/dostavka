import { RECEIVE_SEARCH } from '../actions/address';

const initialState = {
    items: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SEARCH:
            return {
                items: action.result || [],
            };
        default:
            return {
                ...state,
            };
    }
};
