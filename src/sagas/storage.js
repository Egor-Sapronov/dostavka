import { take, put, call } from 'redux-saga/effects';
import { add, removeId } from '../utils/localStorage';
import { ADD_TO_BASKET, receiveFromBasket, REMOVE_FROM_BASKET } from '../actions/basket';

export function* addToBasket() {
    while (true) { // eslint-disable-line no-constant-condition
        const {id} = yield take(ADD_TO_BASKET);

        const result = yield call(add, id);

        yield put(receiveFromBasket(result));
    }
}

export function* removeFromBasket() {
    while (true) { // eslint-disable-line no-constant-condition
        const {id} = yield take(REMOVE_FROM_BASKET);

        const result = yield call(removeId, id);

        yield put(receiveFromBasket(result));
    }
}

export default [addToBasket, removeFromBasket];
