import netlifyIdentity from 'netlify-identity-widget';

const netlifyAuth = {
	isAuthenticated: false,
	user: null,
	initialize(callback) {
		window.netlifyIdentity = netlifyIdentity;
		netlifyIdentity.on('init', (user) => {
			callback(user);
		});
		netlifyIdentity.init();
	},
	authenticate(callback) {
		this.isAuthenticated = true;
		netlifyIdentity.open();
		netlifyIdentity.on('login', (user) => {
			netlifyIdentity.close();
			this.user = user;
			callback(user);
		});
	},
	signout(callback) {
		this.isAuthenticated = false;
		netlifyIdentity.logout();
		netlifyIdentity.on('logout', () => {
            netlifyIdentity.close()
			this.user = null;
			callback();
		});
	},
};

export default netlifyAuth;
