import initialState from './init/initial-state';
import { userActionTypes } from './../actions/user-actions';
//import log from '../services/log-service';

export default (state = initialState, action) => {
	//console.log('user-reducer', state);
	//console.log('user-reducer-action', action);
	switch (action.type) {
		case userActionTypes.USER_SIGNED_IN:
			return {
				...state,
				user: { ...action.user }
			};
		case userActionTypes.USER_SIGNED_OUT:
			return {
				...state,
				user: undefined
			};
		default:
			return state;
	}
};
