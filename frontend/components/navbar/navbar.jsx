import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  componentDidMount () {
    // this.props.retrieve..
  }

  render () {
    return (
      <header className='nav-bar'>
        <h1 className='logo'>OSnap</h1>
        <div>
          {this.props.currentUserId ? (
            <div>
              <p>Hello, {this.props.currentUserId.username}</p>
              <button onClick={this.props.logout}>Log Out</button>
            </div>
            ) : (
            <section>
              <Link className='btn' to='/signup'>Sign Up</Link>
              <Link className='btn' to='/login'>Login</Link>
            </section>
          )}
        </div>
      </header>
    );
  }
}

export default Navbar;
