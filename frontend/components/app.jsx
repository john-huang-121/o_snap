import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './user/signup_container';
import LoginContainer from './session/login_container';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <NavbarContainer />
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
  </div>
);

export default App;
