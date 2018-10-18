import React from 'react';
import { Link } from 'react-router-dom';
// import UploadContainer from '../upload/upload_container';

class Navbar extends React.Component {

  componentDidMount () {
    this.props.fetchUsers();
  }

  clickLogout(e) {
    e.preventDefault();
    this.props.logout().then(() =>
      this.props.history.push('/'));
  }

  currentPageState () {
    if (this.props.isSignup) {
      const signup = (
        <li className='nav-flex-login'>
          <Link className='nav-btn' id='login' to='/login'>Log In</Link>
        </li>
      );
      return signup;
    } else if (this.props.isLogin) {
      const login = (
        <li className='nav-flex-signup'>
          <Link className='nav-btn' id='signup' to='/signup'>Sign Up</Link>
        </li>
      );
      return login;
    } else if (this.props.isSplash && this.props.currentUserId === 'null') {
      const splash = (
        <ul className='nav-flex-login-signup-container'>
          <li className='nav-flex-login'>
            <Link className='nav-btn' id='login' to='/login'>Log In</Link>
          </li>

          <li className='nav-flex-signup'>
            <Link className='nav-btn' id='signup' to='/signup'>Sign Up</Link>
          </li>
        </ul>
      );
      return splash;

    } else if (this.props.isSplash && this.props.currentUserId !== 'null') {
      const userNav = (
        <ul className='nav-icons-and-upload-flex-container'>
          <li className='nav-flex-default-user-container'>
            <a href='#'>
              <div className='nav-default-user-icon'></div>
            </a>
            <div className='nav-default-user-icon-dropdown'>
              <ul className='nav-default-user-icon-dropdown-clearfix'>
                <li>
                  <a href='#'>My Profile</a>
                </li>
                <li>
                  <a href='#'>My Stats</a>
                </li>
                <li>
                  <a href='#'>My Galleries</a>
                </li>
                <li>
                  <a href='#'>My Liked Photos</a>
                </li>
              </ul>
              <ul className='nav-default-user-icon-dropdown-clearfix'>
                <li>
                  <a href='#'>My Settings</a>
                </li>
                <li>
                  <a href='#'>Manage Photos</a>
                </li>
              </ul>
              <ul className='nav-default-user-icon-dropdown-clearfix'>
                <li>
                  <a href='#'>Support</a>
                </li>
              </ul>
              <ul className='nav-default-user-icon-dropdown-clearfix'>
                <li>
                  <div>
                    <button onClick={e => this.clickLogout(e)}>Log out</button>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className='nav-flex-messenger-container'>
            <a href='#'>
              <div className='nav-messenger-icon'></div>
            </a>
          </li>

          <li className='nav-flex-notification-container'>
            <a href='#'>
              <div className='nav-notification-icon'></div>
            </a>
          </li>

          <li className='nav-flex-upload-container'>
            <div className='nav-upload-icon'></div>
            <Link to='/upload' className='nav-btn' id='upload'>Upload</Link>
          </li>
        </ul>
      );
      return userNav;
    }
  }

  render () {

    return (
      <header className="nav-bar">
        <nav className="nav-flex-container">
          <li className='nav-flex-logo'>
            <a className='nav-logo' href='http://localhost:3000/#/'>
              OSnap
            </a>
          </li>

          <li className="nav-flex-discover">
            <a className='nav-btn' href="#">Discover</a>
          </li>


          <li className='nav-flex-about'>
            <a className='nav-btn' href="#">About</a>
          </li>

          <li className='nav-flex-studio'>
            <a className='nav-btn' href="#">Studio</a>
          </li>

          <li className='nav-flex-search-container'>
            <form className='nav-flex-search-container-2'>
              <input className='search-bar' type="text"
              placeholder="Search for photos, location, or people"></input>
            </form>
          </li>

          {this.currentPageState()}

        </nav>
      </header>
    );
  }
}

export default Navbar;

// <li className='nav-flex-items'>
// {this.props.currentUserId ? (
//   <div>
//   <button onClick={this.props.logout}>Log Out</button>
//   </div>
// ) : (
//   <section>
//   <Link className='btn' to='/signup'>Sign Up</Link>
//   <Link className='btn' to='/login'>Login</Link>
//   </section>
// )}
// </li>
