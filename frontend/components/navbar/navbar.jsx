import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPicture } from '../../utils/pictures_utils';
// import UploadContainer from '../upload/upload_container';

const Navbar = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchUsers();
    props.fetchPictures();
  }, [props.fetchUsers, props.fetchPictures]);

  const handleSearchKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const searchParams = e.currentTarget.value.split(' ');
      props.searchMatchingPictures({ data: searchParams });
    }
  }
  const clickLogout = (e) => {
    e.preventDefault();
    props.logout().then(() => navigate('/'));
  };

  // Determine what to display based on current page state.
  const currentPageState = () => {
    if (props.isSignup) {
      return (
        <li className="nav-flex-login">
          <Link className="nav-btn" id="login" to="/login">
            Log In
          </Link>
        </li>
      );
    } else if (props.isLogin) {
      return (
        <li className="nav-flex-signup">
          <Link className="nav-btn" id="signup" to="/signup">
            Sign Up
          </Link>
        </li>
      );
    } else if (props.isSplash && props.currentUserId === 'null') {
      return (
        <ul className="nav-flex-login-signup-container">
          <li className="nav-flex-login">
            <Link className="nav-btn" id="login" to="/login">
              Log In
            </Link>
          </li>
          <li className="nav-flex-signup">
            <Link className="nav-btn" id="signup" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      );
    } else if (props.currentUserId !== 'null') {
      return (
        <ul className="nav-icons-and-upload-flex-container">
          <li className="nav-flex-default-user-container">
            <a href="#">
              <div className="nav-default-user-icon" />
            </a>
            <div className="nav-default-user-icon-dropdown">
              <ul className="nav-default-user-icon-dropdown-clearfix">
                <li className="nav-working-link">
                  <Link to={`/user/${props.currentUserId}`}>My Profile</Link>
                </li>
              </ul>
              <ul className="nav-default-user-icon-dropdown-clearfix">
                <li className="nav-working-link">
                  <button onClick={clickLogout}>Log out</button>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-flex-messenger-container nav-not-working-link">
            <a href="#">
              <div className="nav-messenger-icon" />
            </a>
          </li>
          <li className="nav-flex-notification-container nav-not-working-link">
            <a href="#">
              <div className="nav-notification-icon" />
            </a>
          </li>
          <li className="nav-flex-upload-container">
            <div className="nav-upload-icon" />
            <Link to="/upload" className="nav-btn" id="upload">
              Upload
            </Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <header className="nav-bar">
      <nav className="nav-flex-container">
        <li className="nav-flex-logo">
          <Link className="nav-logo" to="/">
            OSnap
          </Link>
        </li>
        <li className="nav-flex-discover">
          <Link to="/discover" className="nav-btn">
            Discover
          </Link>
        </li>
        <li className="nav-flex-about">
          <a className="nav-btn" href="http://www.johnhuang.me">
            About
          </a>
        </li>
        <li className="nav-flex-search-container">
          <form className="nav-flex-search-container-2">
            <input
              className="search-bar"
              id="search-bar"
              type="text"
              placeholder="Search for photos, location, or people"
              onKeyUp={handleSearchKeyUp}
            />
          </form>
        </li>
        {currentPageState()}
      </nav>
    </header>
  );
};

export default Navbar;