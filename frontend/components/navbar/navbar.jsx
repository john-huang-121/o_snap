import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    return (
      <header className="nav-bar">
        <nav className="nav-flex-container">
          <li className='nav-flex-logo'>
            <a className='logo' href='http://localhost:3000/#/'>
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
            <div className='nav-flex-search-container-2'>
              <input className='search-bar' type="text"
              placeholder="Search for photos, location, or people"></input>
            </div>
          </li>

          <li className='nav-flex-login'>
            <Link className='nav-btn' id='login' to='/login'>Log In</Link>
          </li>

          <li className='nav-flex-signup'>
            <Link className='nav-btn' id='signup' to='/signup'>Sign Up</Link>
          </li>
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
