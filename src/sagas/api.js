import { take, put, call, select } from 'redux-saga/effects';
import { REQUEST_RUBRICS, REQUEST_PRODUCTS, SEARCH_PRODUCTS, receiveRubrics, receiveProducts } from '../actions/api';
import { getRubrics, getProducts } from '../io/api';

const selectRubricId = state => state.catalog.get('rubricId');

export function* searchProducts() {
    while (true) { // eslint-disable-line no-constant-condition
        const { search } = yield take(SEARCH_PRODUCTS);
        const rubricId = yield select(selectRubricId);

        const result = yield call(getProducts, rubricId, search);

        yield put(receiveProducts(result));
    }
}

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

export default [loadRubrics, loadProducts, searchProducts];
