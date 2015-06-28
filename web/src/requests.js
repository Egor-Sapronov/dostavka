import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../bower_components/bootstrap/dist/js/bootstrap.js';
import 'fetch';
import RequestsActionsCreators from './app/actions/RequestsActionsCreators.js';
require('./css/main.styl');
import {display} from './app/components/requests.jsx';

RequestsActionsCreators.getRequests();

display(document.body);
