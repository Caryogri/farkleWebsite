import React from 'react';

import {Route, Routes } from 'react-router-dom';
import { Login } from './Login/login';
import { Start } from './Start/start';
import { Host } from './Host/host';
import { Farkle } from './Game/farkle';
import { AuthState } from './Login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [username, setUserName] = React.useState(localStorage.getItem('username') || '');

  // Asynchronously determine if the user is authenticated by calling the service
  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  React.useEffect(() => {
    if (username) {
      fetch(`/api/user/${username}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((user) => {
          const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
          setAuthState(state);
        });
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, [username]);

  return (
 
    <body style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/grey.jpg'})` 
    }}>
      <Routes>
        <Route
          path='/'
          element={
            <Login
              username={username}
              authState={authState}
              onAuthChange={(username, authState) => {
                setAuthState(authState);
                setUserName(username);
              }}
            />
          }
          exact
        />
        <Route path='/start' element={<Start username={username} />} />
        <Route path='/host' element={<Host username={username} />} />
        <Route path='/farkle' element={<Farkle  />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </body>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;

