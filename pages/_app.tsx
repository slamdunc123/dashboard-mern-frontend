import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react'
import netlifyAuth from '../netlifyAuth.js'

function MyApp({ Component, pageProps }: AppProps) {
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
    let [user, setUser] = useState(null)

    let login = () => {
        netlifyAuth.authenticate((user) => {
          setLoggedIn(!!user)
          setUser(user)
          netlifyAuth.closeModal()
        })
      }
      
      let logout = () => {
        netlifyAuth.signout(() => {
          setLoggedIn(false)
          setUser(null)
        })
      }

useEffect(() => {
  netlifyAuth.initialize((user) => {
    setLoggedIn(!!user)
  })
}, [loggedIn])
	return (
		<Provider store={store}>
			<Layout>
                {loggedIn ? (
                    <div>
                    You are logged in!
                    {user && <>Welcome {user?.user_metadata.full_name}!</>}
                    <br /> 
                    <button onClick={logout}>
                      Log out here.
                    </button>
                  </div>

                    // <Component {...pageProps} />
                ): (<button onClick={login}>
                    Log in here.
                   </button>)}
			</Layout>
		</Provider>
	);
}

export default MyApp;
