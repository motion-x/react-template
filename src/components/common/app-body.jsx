import React from 'react';
import logo from '../../resources/img/logo.svg';

import './css/app.css';

export default () => (
	<div className="app">
		<header className="app-header">
			<img src={logo} className="app-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="app-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	</div>
);
