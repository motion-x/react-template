import http from '../generic/http-service';
import config from '../../config/config';

const apiEndpoint = config.endPoints.users;

export const register = user => {
	return http.post(apiEndpoint, {
		email: user.username,
		password: user.password,
		name: user.name
	});
};
