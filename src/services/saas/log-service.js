/* eslint-disable no-console */

import Raven from 'raven-js';
import { debugMode } from '../../config/config';

const init = () => {
	if (!debugMode) {
		Raven.config('https://your-key-goes-here@sentry.io/14251215', {
			release: '0.0.1',
			environment: 'dev'
		}).install();
	}
};

const setUserContext = (id, email) => {
	if (debugMode) {
		console.log('logger-user-context', { id, email });
	} else {
		Raven.setUserContext({ id, email });
	}
};

const exception = error => {
	if (debugMode) {
		console.log('exception >> ', exception);
	} else {
		Raven.captureException(error);
	}
};

const info = msg => {
	if (debugMode) {
		console.log('info >> ', msg);
	} else {
		Raven.captureMessage(msg, { level: 'info' });
	}
};

const warning = msg => {
	if (debugMode) {
		console.log('warning >> ', msg);
	} else {
		Raven.captureMessage(msg, { level: 'warning' });
	}
};

const error = msg => {
	if (debugMode) {
		console.log('error >> ', msg);
	} else {
		Raven.captureMessage(msg, { level: 'error' });
	}
};

export default {
	init,
	setUserContext,
	exception,
	info,
	warning,
	error
};
