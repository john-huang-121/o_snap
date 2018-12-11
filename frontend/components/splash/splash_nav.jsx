import React from 'react';
import { Link } from 'react-router-dom';

class SplashNav extends React.Component {

  render () {
    return (
      <nav className="splash-nav-flex-container">

        <ul className='splash-nav-flex-link-container'>
          <li className='splash-nav-flex-logo'>
            <a className='splash-logo font-effect-fire-animation' href='#'>OSnap</a>
          </li>

          <li className='splash-nav-flex-discover'>
            <a className='splash-nav-btn' href="#">Discover</a>
          </li>


          <li className='splash-nav-flex-about'>
            <a className='splash-nav-btn' href="#">About</a>
          </li>

          <li className='splash-nav-flex-licensing'>
            <a className='splash-nav-btn' href="#">Licensing</a>
          </li>
        </ul>

        <ul className='splash-nav-flex-auth-container'>
          <li className='splash-nav-flex-login'>
            <Link className='splash-nav-btn' id='login' to='/login'>Log In</Link>
          </li>

          <li className='splash-nav-flex-signup'>
            <Link className='splash-nav-btn' id='signup' to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SplashNav;
