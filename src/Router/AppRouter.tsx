import React, { useEffect } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './history';

import { User } from '../containers/user.container';
import API from '../lib/API';

import HomePage from '../pages/Home/Home.page';
import SignupPage from '../pages/Signup/Signup.page';
import LoginPage from '../pages/Login/Login.page';
import PartnersPage from '../pages/Partners/Partners.page';
import ProfilePage from '../pages/UserProfile/UserProfile.page';
import MentorshipPage from '../pages/Mentorship/Mentorship.page';
import ValidateEmailPage from '../pages/ValidateEmail/ValidateEmail.page';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import EventsPage from '../pages/Events/Events.page';
import SinglePageEvent from '../components/Events/EventSinglePage/EventSinglePage';
import MentorSelection from '../pages/MentorSelection/MentorSelection.page';
import MentorSelectionPage from '../pages/MentorSelection/MentorSelection.page';
import MentorProfilePage from '../pages/MentorProfile/MentorProfile.page';

const AppRouter = () => {
  const { user, setUser } = User.useContainer();

  // For security purposes authorization tokens are only ever saved to memory and expire after 15 minutes
  // In order to keep the user logged in a less secure refresh token is stored as a http-only cookie
  // This token can be sent to the server in order to receive a new authorization token but cannot be used to access protected routes

  useEffect(() => {
    const refreshUser = async () => {
      const res = await API.refreshToken();

      console.log(res);

      // Save token and user data into memory
      if (res.data) {
        setUser({ token: res.token, ...res.data.user });
        return res;
      }
    };

    refreshUser();
    // Attempt to refresh the user every time the app is reloaded
    // Set an interval to refresh the token every 14.5 minutes (30s before token expiry)
    const id = setInterval(async () => {
      try {
        const res = await refreshUser();

        // If refresh fails end attempts to refresh
        if (!res.token) clearInterval(id);
      } catch {
        clearInterval(id);
      }
    }, 14.5 * 60 * 1000);
  }, []);

  return (
    <Router history={history}>
      <div className='layout-wrapper'>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/partners' exact component={PartnersPage} />
          {/* <Route path="/events" exact component={EventsPage} /> */}
          <Route
            path='/events'
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={EventsPage} exact />
                <Route
                  path={`${url}/:eventId`}
                  component={SinglePageEvent}
                  exact
                />
              </>
            )}
          />
          <Route path='/mentorship' exact component={MentorshipPage} />
          <Route path='/mentors' exact component={MentorSelection} />
          <Route
            path='/validateEmail/:id'
            exact
            component={ValidateEmailPage}
          />
          <Route path='/' exact component={HomePage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/mentorship' exact component={MentorshipPage} />
          <Route path='/mentors' exact component={MentorSelectionPage} />
          <Route
            path='/mentors/:mentorId'
            exact
            component={MentorProfilePage}
          />
          {/* NOTE: only put routes requiring a user below, else put above this check */}
          {!user && <Redirect to='/' />}
          <Route path='/profile' exact component={ProfilePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
