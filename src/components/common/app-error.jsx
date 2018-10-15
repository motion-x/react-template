import React from 'react';

import './css/app-error.css';

const AppError = ({ msg, title = 'Ops, something went wrong!', onDismiss }) => {
	return (
		<div className="app-error-container">
			<div className="app-error-box">
				<div>{title}</div>
				<div>
					<div>
						<span>{msg}</span>
					</div>
				</div>
				<div>
					<button className="btn btn-sm" onClick={onDismiss}>
						Dismiss
					</button>
				</div>
			</div>
		</div>
	);
};

export default AppError;
