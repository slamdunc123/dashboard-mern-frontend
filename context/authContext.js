import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const AuthContext = createContext({
	user: null,
	login: () => {},
	logout: () => {},
});

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// on login
		netlifyIdentity.on('login', (user) => {
			netlifyIdentity.close();
			setUser(user);
		});

		// on logout
		netlifyIdentity.on('logout', (user) => {
			netlifyIdentity.close();
			setUser(null);
		});

		// connect with Netlify Identity
		netlifyIdentity.init();
	}, []);

	const login = () => {
		netlifyIdentity.open();
	};

	const logout = () => {
		netlifyIdentity.logout();
	};

	const context = {
        user,
		login,
		logout,
	};
	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
