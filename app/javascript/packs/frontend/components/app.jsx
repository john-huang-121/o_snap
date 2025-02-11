import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupHomeContainer from "./user/signup/signup_home_container";
import ProfileContainer from './user/profile/profile_container';
import LoginContainer from './session/login_container';
import HomepageDisplayContainer from './splash/homepage_display_container';
import FeedContainer from './feed/feed_container';
import DiscoverContainer from './discover/discover_container';
import UploadContainer from './upload/upload_container';
import PictureShowContainer from './picture_show/picture_show_container';
import ModalContainer from './modal/picture_modal_container';

const App = () => (
  <Routes>
    <Route
      path="/login"
      element={<AuthRoute component={LoginContainer} />}
    />
    <Route
      path="/signup"
      element={<AuthRoute component={SignupHomeContainer} />}
    />
    <Route
      path="/discover"
      element={<ProtectedRoute component={DiscoverContainer} />}
    />
    <Route
      path="/upload"
      element={<ProtectedRoute component={UploadContainer} />}
    />
    <Route path="/" element={<HomepageDisplayContainer />} />
    <Route path="/pictures/:id" element={<PictureShowContainer />} />
    <Route path="/pictures" element={<FeedContainer />} />
    <Route path="/user/:id" element={<ProfileContainer />} />
    <Route path="/modal" element={<ModalContainer />} />
  </Routes>
);

export default App;