import { take, put, call } from 'redux-saga';
import { REQUEST_SEARCH, receiveSearch } from '../actions/address';
import { searchGeo } from '../io/api';

function* searchAddress() {
    while (true) { // eslint-disable-line no-constant-condition
        const { search, uuid } = yield take(REQUEST_SEARCH);

        const result = yield call(searchGeo, search);

        yield put(receiveSearch(uuid, result));
    }
}

export default [searchAddress];
