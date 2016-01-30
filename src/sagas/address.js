import { take, put } from 'redux-saga';
import { REQUEST_SEARCH, receiveSearch } from '../actions/address';
import { searchGeo } from '../io/api';

function* searchAddress() {
    while (true) { // eslint-disable-line no-constant-condition
        const nextAction = yield take(REQUEST_SEARCH);

        const result = yield searchGeo(nextAction.search);

        yield put(receiveSearch(result));
    }
}

export default [searchAddress];
