import React from 'react';
import { Link } from 'react-router-dom';
// import UploadContainer from '../upload/upload_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount () {
    this.props.fetchUsers();
    this.props.fetchPictures();

    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        let searchParams = (e.currentTarget.value).split(' ');
        this.props
          .searchMatchingPictures({ data: searchParams });
          // .then(() => this.props.history.push("/"));
      }
    });
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

    } else if (this.props.currentUserId !== 'null') {
      const userNav = <ul className="nav-icons-and-upload-flex-container">
          <li className="nav-flex-default-user-container">
            <a href="#">
              <div className="nav-default-user-icon" />
            </a>
            <div className="nav-default-user-icon-dropdown">
              <ul className="nav-default-user-icon-dropdown-clearfix">
                <li className="nav-working-link">
                  <Link to={"/user/" + this.props.currentUserId}>
                    My Profile
                  </Link>
                </li>
                <li className="nav-not-working-link">
                  <a href="#">My Stats</a>
                </li>
                <li className="nav-not-working-link">
                  <a href="#">My Galleries</a>
                </li>
                <li className="nav-not-working-link">
                  <a href="#">My Liked Photos</a>
                </li>
              </ul>
              <ul className="nav-default-user-icon-dropdown-clearfix">
                <li className="nav-not-working-link">
                  <a href="#">My Settings</a>
                </li>
                <li className="nav-not-working-link">
                  <a href="#">Manage Photos</a>
                </li>
              </ul>
              <ul className="nav-default-user-icon-dropdown-clearfix">
                <li className="nav-not-working-link">
                  <a href="#">Support</a>
                </li>
              </ul>
              <ul className="nav-default-user-icon-dropdown-clearfix">
                <li className='nav-working-link'>
                  <button onClick={e => this.clickLogout(e)}>
                    Log out
                  </button>
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
        </ul>;
      return userNav;
    }
  }

  render () {

    return <header className="nav-bar">
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

          <li className="nav-flex-about nav-not-working-link">
            <a className="nav-btn" href="#">
              About
            </a>
          </li>

          <li className="nav-flex-studio nav-not-working-link">
            <a className="nav-btn" href="#">
              Studio
            </a>
          </li>

          <li className="nav-flex-search-container">
            <form className="nav-flex-search-container-2">
              <input className="search-bar"
                id='search-bar'
                type="text"
                placeholder="Search for photos, location, or people"
              />
            </form>
          </li>

          {this.currentPageState()}
        </nav>
      </header>;
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
