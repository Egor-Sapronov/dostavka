import { take, put, call } from 'redux-saga';
import { REQUEST_RUBRICS, receiveRubrics } from '../actions/api';
import { getRubrics } from '../io/api';

export function* loadRubrics() {
    while (true) { // eslint-disable-line no-constant-condition
        yield take(REQUEST_RUBRICS);

        const result = yield call(getRubrics);

        yield put(receiveRubrics(result));
    }
}

export default [loadRubrics];
