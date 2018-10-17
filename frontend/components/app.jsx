import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './user/signup_container';
import SignupEmailContainer from './user/signup_email_container';
import LoginContainer from './session/login_container';
import NavbarContainer from './navbar/navbar_container';
import HomepageDisplayContainer from './splash/homepage_display_container';
import SignupHomeContainer from './user/signup_home_container';
import PictureIndexContainer from './picture/picture_index_container';

const App = () => (
  <div>
    <Route path='/pictures' component={PictureIndexContainer} />
    <Route exact path='/' component={HomepageDisplayContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupHomeContainer} />
  </div>
);

export default App;
