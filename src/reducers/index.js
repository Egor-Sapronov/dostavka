import { combineReducers } from 'redux';
import address from './address';
import catalog from './catalog';
import basket from './basket';

export default combineReducers({address, catalog, basket});
