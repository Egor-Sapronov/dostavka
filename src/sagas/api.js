import { take, put, call } from 'redux-saga';
import { REQUEST_RUBRICS, REQUEST_PRODUCTS, receiveRubrics, receiveProducts } from '../actions/api';
import { getRubrics, getProducts } from '../io/api';

export function* loadRubrics() {
    while (true) { // eslint-disable-line no-constant-condition
        yield take(REQUEST_RUBRICS);

        const result = yield call(getRubrics);

        yield put(receiveRubrics(result));
    }
}

export function* loadProducts() {
    while (true) { // eslint-disable-line no-constant-condition
        const { rubricId } = yield take(REQUEST_PRODUCTS);

        const result = yield call(getProducts, rubricId);

        yield put(receiveProducts(result));
    }
}

export default [loadRubrics, loadProducts];
