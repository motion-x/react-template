export const userActionTypes = {
	USER_SIGNED_IN: 'USER_SIGNED_IN',
	USER_SIGNED_OUT: 'USER_SIGNED_OUT'
};

export const handleUserSignedIn = user => ({
	type: userActionTypes.USER_SIGNED_IN,
	user
});

export const handleUserSignedOut = () => ({
	type: userActionTypes.USER_SIGNED_OUT
});
