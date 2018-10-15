import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      email: '',
      password: ''
    };
    this.demo = {
      // username: '',
      email: 'user11@gmail.com',
      password: '123456'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoLogin = this.demoLogin.bind(this);
  }

  // demoOrNotLogin(button) {
  //   return (e) => {
  //     this.whichButton
  //   }
  // }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  render () {
    return (
      <section className='login-page-container'>
        <NavbarContainer />
        <div className='login-page-after-nav'>
          <div className='login-header-flex-container'>
            <div className='login-header'>
              <ul className='login-header-texts'>
                <li>Log In to 500px</li>
              </ul>
            </div>

            <div className='login-form-container'>
              <form className='login-form' onSubmit={this.handleSubmit}>
                <label className='login-form-email-username-container'>Email or Username
                  <input className='login-input' type='email' value={this.state.email}
                  onChange={this.handleInput('email')} />
                </label>

                <label className='login-form-password-container'>
                  <div className='login-form-password-header'>
                    Password<a href='#' className='forgot-pass'>Forgot password?</a>
                  </div>
                  <input className='login-input' type='password' value={this.state.password}
                  onChange={this.handleInput('password')} />
                </label>

                <div className='login-forms-container'>
                  <input type='submit' value='Log In' />
                  <input type='submit' value='Demo log In' />
                </div>

                <div className='login-buttons'>
                  <button className='login-facebook-button'>
                    <div className='login-facebook-icon'></div>
                    <p>Continue with Facebook</p>
                  </button>

                  <button className='login-google-button'>
                    <div className='login-google-icon'></div>
                    <p>Continue with Google</p>
                  </button>
                </div>
              </form>
            </div>

            <div className='login-page-link-container'>
              <li className='login-page-link'>Don't have an account?&nbsp;
                <Link className='nav-btn' id='signup' to='/signup'>Sign up</Link>
              </li>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Login;
