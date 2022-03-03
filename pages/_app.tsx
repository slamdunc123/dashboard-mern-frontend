import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../components/Layout/Layout';
import AuthContextProvider from '../context/authContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AuthContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthContextProvider>
		</Provider>
	);
}

export default MyApp;
