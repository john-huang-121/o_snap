import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './user/signup_container';
import SignupEmailContainer from './user/signup_email_container';
import LoginContainer from './session/login_container';
import SplashNavContainer from './splash/splash_nav_container';
import NavbarContainer from './navbar/navbar_container';
import HomepageDisplayContainer from './splash/homepage_display_container';

const App = () => (
  <div>
    <Route exact path='/' component={SplashNavContainer} />
    <Route exact path='/' component={HomepageDisplayContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute exact path='/signup/email' component={SignupEmailContainer} />
  </div>
);

export default App;

// <AuthRoute path='/signup' component={SignupContainer} />
