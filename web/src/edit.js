import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../bower_components/bootstrap/dist/js/bootstrap.js';
require('es6-promise').polyfill();
import PlacesActionCreators from './app/actions/PlacesActionCreators.js';
require('./css/main.styl');
import {display} from './app/components/edit.jsx';

PlacesActionCreators.getRequest(location.href.split('/')[location.href.split('/').length - 1]);

display(document.getElementById('content'));

