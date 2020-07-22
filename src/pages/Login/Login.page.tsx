import React, { useState } from 'react';
import LoginForm from './LoginForm';

import './login.scss';
import { Redirect } from 'react-router';

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Redirect user to home after login
  if (loggedIn) return <Redirect to="/" />;

  return (
    <main className="login-page">
      <LoginForm onLogIn={setLoggedIn} />
    </main>
  );
};

export default LoginPage;
