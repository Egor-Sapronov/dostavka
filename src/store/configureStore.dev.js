import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/devTools';
import middlewares from './middlewares';

export default function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState, compose(
        middlewares,
        DevTools.instrument(),
        persistState(
            window.location.href.match(
                /[?&]debug_session=([^&]+)\b/
            )
        )
    ));

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
    }

    return store;
}
