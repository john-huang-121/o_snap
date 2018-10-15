import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/photos'));
  }

  render () {
    return (
      <section className='signup-page-container'>
        <NavbarContainer />
        <div className='signup-page-after-nav'>
          <div className='signup-form-flex-container'>
            <div className='signup-buttons-header'>
              <ul className='signup-buttons-header-texts'>
                <li>Join OSnap</li>
                <li>Share your photos, get inspired, and grow your skills</li>
              </ul>
            </div>

            <div className='signup-buttons'>
              <button className='signup-facebook-button'>
                <div className='signup-facebook-icon'></div>
                <p>Continue with Facebook</p>
              </button>

              <button className='signup-google-button'>
                <div className='signup-google-icon'></div>
                <p>Continue with Google</p>
              </button>
            </div>

            <div className="signup-newsletter-and-email-container">
              <div className='signup-newsletter-checkbox-container'>
                <input type="checkbox"></input>
                <p>
                  I would like to receive emails with likes,
                  comments, replies and updates from Osnap.&nbsp;
                  <a href='#'>Learn more.</a>
                </p>
              </div>

              <div className='signup-line-divider-container'>
                <div className='signup-line-divider'></div>
                <div className='signup-text-divider'>or</div>
                <div className='signup-line-divider'></div>
              </div>

               <button className='signup-email-button'>
                 <div className='signup-email-icon'></div>
                 <Link className='signup-email-link' to='/email'>Continue with Email</Link>
               </button>
            </div>

            <div className='signup-page-TOS-container'>
              <li className='signup-page-TOS'>By signing up, you agree to our&nbsp;
                <a href='#'>Terms of Service.</a>
              </li>

              <li className='signup-page-TOS'>Already have an account?
                <Link className='nav-btn' id='login' to='/login'>Log in</Link>
              </li>
            </div>

          </div>
        </div>

      </section>
    );
  }
}

export default Signup;

// <form className='signup-form' onSubmit={this.handleSubmit}>
// <h1>Sign Up!</h1>
//
// <label>username
// <input type='text' value={this.state.username}
// onChange={this.handleInput('username')} />
// </label>
//
// <label>Email
// <input type='email' value={this.state.email}
// onChange={this.handleInput('email')} />
// </label>
//
// <label>Password
// <input type='password' value={this.state.password}
// onChange={this.handleInput('password')} />
// </label>
//
// <input type='submit' value='Sign Up' />
// </form>
