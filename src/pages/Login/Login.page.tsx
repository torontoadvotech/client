import React, { useState } from 'react';
import LoginForm from './LoginForm';

import './login.scss';
import { Redirect } from 'react-router';
import { User } from '../../containers/user.container';

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = User.useContainer();

  // Redirect user to home after login
  if (loggedIn) {
    if (!user!['initialOnboardFormCompleted']) {
      return <Redirect to="/initial-account-setup" />;
    }
    return <Redirect to="/" />;
  }

  return (
    <main className="login-page">
      <LoginForm onLogIn={setLoggedIn} />
    </main>
  );
};

export default LoginPage;
