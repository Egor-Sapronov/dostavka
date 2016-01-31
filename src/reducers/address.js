import { RECEIVE_SEARCH, ADD_ADDRESS, SELECT_ADDRESS } from '../actions/address';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ADDRESS:
            return {
                ...state,
                [action.uuid]: {
                    selected: action.address,
                },
            };
        case ADD_ADDRESS:
            return {
                ...state,
                [action.uuid]: {},
            };
        case RECEIVE_SEARCH:
            return {
                ...state,
                [action.uuid]: {
                    items: action.result,
                },
            };
        default:
            return state;
    }
};
