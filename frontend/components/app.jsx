import React from 'react';
import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './user/signup_container';

const App = () => (
  <div>
    <Route path='/signup' component={SignupContainer} />
  </div>
);

export default App;
