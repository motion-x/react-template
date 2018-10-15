import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/user-reducer';

export default () => {
	return createStore(
		combineReducers({
			userReducer
		}),
		applyMiddleware(thunk)
	);
};
