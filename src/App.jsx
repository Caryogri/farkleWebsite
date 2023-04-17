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
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

  // Asynchronously determine if the user is authenticated by calling the service
  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  React.useEffect(() => {
    if (userName) {
      fetch(`/api/user/${userName}`)
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
  }, [userName]);

  return (
 
    <body style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/grey.jpg'})` 
    }}>
      <Routes>
        <Route
          path='/'
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
            />
          }
          exact
        />
        <Route path='/start' element={<Start userName={userName} />} />
        <Route path='/host' element={<Host userName={userName} />} />
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

