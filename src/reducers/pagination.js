import { NEXT_PAGE, START_PAGE } from '../actions/pagination';
import { Map } from 'immutable';
const LIMIT = 20;
const initialState = Map({
    skip: 0,
    limit: 20,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            const currentSkip = state.get('skip');
            return state.set('skip', currentSkip + LIMIT);
        case START_PAGE:
            return state.set('skip', 0);
        default:
            return state;
    }
};
