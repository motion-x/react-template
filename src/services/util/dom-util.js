export const ChangeThemeColor = color => {
	document
		.querySelector('meta[name=theme-color]')
		.setAttribute('content', color);
	document
		.querySelector('meta[name=msapplication-navbutton-color]')
		.setAttribute('content', color);
	document
		.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')
		.setAttribute('content', color);
};
