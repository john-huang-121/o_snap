import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupHomeContainer from "./user/signup/signup_home_container";
import ProfileContainer from './user/profile/profile_container';
import LoginContainer from './session/login_container';
import HomepageDisplayContainer from './splash/homepage_display_container';
import FeedContainer from './feed/feed_container';
import DiscoverContainer from './discover/discover_container';
import UploadContainer from './upload/upload_container';
import PictureShowContainer from './picture_show/picture_show_container';

const App = () => (
  <div>
    <Route exact path="/pictures/:id" component={PictureShowContainer} />
    <Route exact path="/pictures" component={FeedContainer} />
    <Route exact path="/discover" component={DiscoverContainer} />
    <Route exact path="/user/:id" component={ProfileContainer} />
    <Route exact path="/" component={HomepageDisplayContainer} />
    <ProtectedRoute path="/upload" component={UploadContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupHomeContainer} />
  </div>
);

export default App;
