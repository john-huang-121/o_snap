import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './user/signup_container';
import PhotoIndexContainer from './photo/photo_index_container';
import LoginContainer from './session/login_container';

const App = () => (
  <div>
    <ProtectedRoute path='/photos' component={PhotoIndexContainer} />
    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
  </div>
);

export default App;
