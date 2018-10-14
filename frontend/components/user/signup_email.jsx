import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class SignupEmail extends React.Component {
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
      <section className='signup-email-page-container'>
        <NavbarContainer />
        <div className='signup-email-page-after-nav'>
          <div className='signup-email-form-flex-container'>
            <div className='signup-email-buttons-header'>
              <ul className='signup-email-buttons-header-texts'>
                <li>Sign up with <a href='#'>Facebook </a>
                or <a href='#'>Google</a>.</li>
              </ul>
            </div>

            <div className="signup-email-newsletter-and-email-container">
              <div className='signup-email-newsletter-checkbox-container'>
                <input type="checkbox"></input>
                <p>
                  I would like to receive emails with likes,
                  comments, replies and updates from Osnap.&nbsp;
                  <a href='#'>Learn more.</a>
                </p>
              </div>

              <div className='signup-email-line-divider-container'>
                <div className='signup-email-line-divider'></div>
                <div className='signup-email-text-divider'>or</div>
                <div className='signup-email-line-divider'></div>
              </div>

               <button className='signup-email-email-button'>
                 <div className='signup-email-email-icon'></div>
                 <p>Continue with Email</p>
               </button>
            </div>

            <div className='signup-email-page-TOS-container'>
              <li className='signup-email-page-TOS'>By signing up, you agree to our&nbsp;
                <a href='#'>Terms of Service.</a>
              </li>

              <li className='signup-email-page-TOS'>Already have an account?
                <Link className='nav-btn' id='login' to='/login'>Log in</Link>
              </li>
            </div>

          </div>
        </div>

      </section>
    );
  }
}

export default SignupEmail;

// <form className='signup-email-form' onSubmit={this.handleSubmit}>
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
