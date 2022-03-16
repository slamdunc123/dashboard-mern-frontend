import { combineReducers } from 'redux';
import testReducer from './testReducer';
import customerReducer from './customerReducer';

export default combineReducers({
	testReducer: testReducer,
	customerReducer: customerReducer,
});
