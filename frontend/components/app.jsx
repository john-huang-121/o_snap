import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Signup from './user/signup/signup';
import SignupEmailContainer from "./user/signup/signup_email_container";
import SignupHomeContainer from "./user/signup/signup_home_container";
import ProfileContainer from './user/profile/profile_container';
import LoginContainer from './session/login_container';
import NavbarContainer from './navbar/navbar_container';
import HomepageDisplayContainer from './splash/homepage_display_container';
import PictureIndexContainer from './picture/picture_index_container';
import UploadContainer from './upload/upload_container';
import PictureShowContainer from './picture/picture_show_container';

const App = () => (
  <div>
    <Route exact path='/pictures/:id' component={PictureShowContainer} />
    <Route exact path='/pictures' component={PictureIndexContainer} />
    <Route exact path='/user/:id' component={ProfileContainer} />
    <Route exact path='/' component={HomepageDisplayContainer} />
    <ProtectedRoute path='/upload' component={UploadContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
    <AuthRoute path='/signup' component={SignupHomeContainer} />
  </div>
);

export default App;
