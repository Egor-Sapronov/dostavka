import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import addressSaga from '../sagas/address';

const middlewares = [sagaMiddleware(...addressSaga)];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({
        predicate: (getState, action) => !action.type.startsWith('EFFECT'),
    }));
}

export default applyMiddleware(...middlewares);
