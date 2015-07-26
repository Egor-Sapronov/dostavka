import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../bower_components/bootstrap/dist/js/bootstrap.js';
require('es6-promise').polyfill();
import PlacesActionCreators from './app/actions/PlacesActionCreators.js';
require('./css/main.styl');
import {display} from './app/components/app.jsx';

PlacesActionCreators.createPlace({});
PlacesActionCreators.createPlace({});

display(document.getElementById('content'));
