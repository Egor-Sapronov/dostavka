import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import addressSaga from '../sagas/address';
import apiSaga from '../sagas/api';
import localStorageSaga from '../sagas/storage';

const middlewares = [sagaMiddleware(...addressSaga, ...apiSaga, ...localStorageSaga)];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({
        predicate: (getState, action) => !action.type.startsWith('EFFECT'),
    }));
}

export default applyMiddleware(...middlewares);
