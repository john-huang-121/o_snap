import React, { useState, useEffect, useCallback } from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    props.clearAllErrors();
  }, [props.clearAllErrors]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login({ email, password })
      .then(() => navigate('/'));
  };

  const demoLogin = (e) => {
    e.preventDefault();
    const demoEmail = 'demo_user@gmail.com';
    const demoPassword = '123456';
    // Directly use demo credentials without waiting for state update.
    props.login({ email: demoEmail, password: demoPassword })
      .then(() => navigate('/'));
  };

  const renderErrors = () => {
    if (props.errors && props.errors.length > 0) {
      return (
        <ul className="login-errors-container">
          {props.errors.map((error, idx) => (
            <li className="login-error" key={idx}>{error}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <section className="login-page-container">
      <NavbarContainer />
      <div className="login-page-after-nav">
        <div className="login-header-flex-container">
          <div className="login-header">
            <ul className="login-header-texts">
              <li>Log In to 500px</li>
            </ul>
          </div>

          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <label className="login-form-email-username-container">
                Email or Username
                <input 
                  className="login-input" 
                  type="email" 
                  value={email} 
                  onChange={handleEmailChange} 
                />
              </label>

              <label className="login-form-password-container">
                <div className="login-form-password-header">
                  Password
                  <Link to="/login" className="forgot-pass">
                    Forgot password?
                  </Link>
                </div>
                <input 
                  className="login-input" 
                  type="password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                />
              </label>

              {renderErrors()}

              <div className="login-forms-container">
                <input type="submit" value="Log in" />
                <button onClick={demoLogin}>
                  Demo Log In
                </button>
              </div>

              <div className="login-buttons">
                <button className="login-facebook-button" onClick={demoLogin}>
                  <div className="login-facebook-icon" />
                  <p>Continue with Facebook</p>
                </button>
                <button className="login-google-button" onClick={demoLogin}>
                  <div className="login-google-icon" />
                  <p>Continue with Google</p>
                </button>
              </div>
            </form>
          </div>

          <div className="login-page-link-container">
            <li className="login-page-link">
              Don't have an account?&nbsp;
              <Link to="/signup">
                Sign up
              </Link>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;