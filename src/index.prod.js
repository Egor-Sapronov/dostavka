import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/root/root';
import configureStore from './store/configureStore';
import './styles/fonts.css';
import './styles/default.css';

const store = configureStore();

render(
    <Provider store={ store }>
        <Root />
    </Provider>,
    document.getElementById('root')
);
