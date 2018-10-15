import React from 'react';
import { Route } from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
	const mergedProps = Object.assign({}, ...rest);
	return React.createElement(component, mergedProps);
};

export const PropsRoute = ({ component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={routeProps => {
				return renderMergedProps(component, routeProps, rest);
			}}
		/>
	);
};
