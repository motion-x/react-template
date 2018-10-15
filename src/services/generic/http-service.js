import axios from 'axios';
import { toast } from 'react-toastify';
import logger from '../saas/log-service';

axios.interceptors.response.use(null, error => {
	const clientError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!clientError) {
		logger.exception(error);
		toast.error('An unexpected error occured..');
	}

	return Promise.reject(error);
});

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete
};

// If we decide to change the http lib in the future, this will be the only place we need to change it.
