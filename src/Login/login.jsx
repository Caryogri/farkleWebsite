import React from 'react';

import { Unauthenticated } from './Unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ username, authState, onAuthChange }) {
  const [quote, setQuote] = React.useState('Nothing yet');
  React.useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      setQuote(data.content);
    })
    .catch();
}, []);
  return (
    <main className='container-fluid text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>BoppaGames</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated username={username} onLogout={() => onAuthChange(username, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            username={username}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>

      <div>
        <p>{quote}</p>
      </div>
    </main>
  );
}
