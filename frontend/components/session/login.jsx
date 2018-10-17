import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearAllErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  demoLogin(e) {
    e.preventDefault();
    this.setState(
      {email: 'testy_mctoastface@gmail.com', password: '123456'}, () => {
      this.props.login(this.state)
        .then(() => this.props.history.push('/'));
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className='login-errors-container'>
          {this.props.errors.map((error) => (
            <li className='login-error' key={error.id}>{error}</li>)
          )}
        </ul>
      );
    }
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

                {this.renderErrors()}

                <div className='login-forms-container'>
                  <input type='submit' value='Log in' />
                  <button onClick={e => this.demoLogin(e)}>Demo Log In</button>
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
