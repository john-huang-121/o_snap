import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Login extends React.Component {
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
                <label>Email
                  <input className='login-input' type='email' value={this.state.email}
                  onChange={this.handleInput('email')} />
                </label>

                <label>Password
                  <input className='login-input' type='password' value={this.state.password}
                  onChange={this.handleInput('password')} />
                </label>

                <input className='login-form-submit' type='submit' value='Sign Up' />

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
                <Link className='nav-btn' id='signup' to='/signup'>Log in</Link>
              </li>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Login;
