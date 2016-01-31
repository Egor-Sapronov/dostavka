import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/root/root';
import configureStore from './store/configureStore';
import DevTools from './containers/devTools';

const store = configureStore();

render(
    <div>
        <Provider store={ store }>
            <div>
                <Root />
                { process.env.DEVTOOLS ? <DevTools /> : null}
            </div>
        </Provider>
    </div>,
    document.getElementById('root')
);
