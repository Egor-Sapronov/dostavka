import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../bower_components/bootstrap/dist/js/bootstrap.js';
require('es6-promise').polyfill();
import RequestsActionsCreators from './app/actions/RequestsActionsCreators.js';
require('./css/main.styl');
import {display} from './app/components/requests.jsx';

let token = location.hash.split('#')[1];

if (token) {
  localStorage.setItem('token', token);
}

RequestsActionsCreators.getRequests();

display(document.getElementById('content'));
