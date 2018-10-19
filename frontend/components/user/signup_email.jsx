import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class SignupEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.renderErrors = this.renderErrors.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className='signup-errors-container'>
          {this.props.errors.map((error) => (
            <li className='signup-error'>{error}</li>)
          )}
        </ul>
      );
    }
  }

  render () {
    return (
      <section className='signup-email-page-container'>
        <div className='signup-email-page-after-nav'>
          <div className='signup-email-header-flex-container'>
            <div className='signup-email-header'>
              <ul className='signup-email-header-texts'>
                <li>Sign up with <a href='#'>Facebook </a>
                or <a href='#'>Google</a>.</li>
              </ul>

              <div className='signup-email-line-divider-container'>
                <div className='signup-email-line-divider'></div>
                <div className='signup-email-text-divider'>or</div>
                <div className='signup-email-line-divider'></div>
              </div>
            </div>

            <div className='signup-email-form-container'>
              <form className='signup-email-form' onSubmit={this.handleSubmit}>
                <label>Email
                  <input className='signup-email-input' type='email' value={this.state.email}
                  onChange={this.handleInput('email')} />
                </label>

                <label>Password
                  <input className='signup-email-input' type='password' value={this.state.password}
                  onChange={this.handleInput('password')} />
                </label>

                {this.renderErrors()}

                <div className="signup-email-newsletter-and-email-container">
                  <div className='signup-email-newsletter-checkbox-container'>
                    <input type="checkbox"></input>
                    <p>
                      I would like to receive emails with likes,
                      comments, replies and updates from Osnap.&nbsp;
                      <a href='#'>Learn more.</a>
                    </p>
                  </div>
                </div>

                <input className='signup-email-form-submit' type='submit' value='Sign Up' />
              </form>
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
