import React from 'react';

import spinner from '../../resources/img/spinner-100px.svg';

import './css/content-loading.css';

const ContentLoading = () => {
	return (
		<div className="content-loading-container">
			<img src={spinner} alt="" />
			<span>loading</span>
		</div>
	);
};

export default ContentLoading;
