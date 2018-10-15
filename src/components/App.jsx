import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//import { PropsRoute } from '../services/util/route-utils';
import { getImgUrl, getImgIdUrl } from '../services/saas/test-img-service';
import http from '../services/generic/http-service';

import ContentLoading from './common/content-loading';
import AppError from './common/app-error';
import Body from './common/app-body';

import {
	handleUserSignedIn,
	handleUserSignedOut
} from '../actions/user-actions';

import './css/app.css';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (!this.props.user) {
			window
				.fetch(
					'https://randomuser.me/api/?format=json&inc=gender,name,email,id,phone,picture&noinfo&nat=us',
					{
						method: 'GET', // *GET, POST, PUT, DELETE, etc.
						mode: 'cors', // no-cors, cors, *same-origin
						headers: {
							'Content-Type': 'application/json; charset=utf-8'
							// "Content-Type": "application/x-www-form-urlencoded",
						}
					}
				)
				.then(result => result.json())
				.then(({ results }) => results[0])
				.then(user => {
					this.props.handleUserSignedIn(user);
				});
		}
	}

	render() {
		return (
			<div className="app-main-container">
				<ToastContainer />
				{this.props.user ? (
					<Switch>
						<Route path="/info" component={null} />
						<Route
							path="/"
							render={routeProps => {
								return <Body />;
							}}
						/>
					</Switch>
				) : (
					<Redirect to="/login" />
				)}
			</div>
		);
	}
}

export default connect(
	state => ({
		user: state.userReducer.user
	}),
	{
		handleUserSignedIn,
		handleUserSignedOut
	}
)(App);
