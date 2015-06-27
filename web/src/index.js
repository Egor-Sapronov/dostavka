import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../bower_components/bootstrap/dist/js/bootstrap.js';
import 'fetch';
import PlacesActionCreators from './app/actions/PlacesActionCreators.js';
require('./css/main.styl');
import {display} from './app/components/app.jsx';

PlacesActionCreators.createPlace({});
PlacesActionCreators.createPlace({});

display(document.body);
