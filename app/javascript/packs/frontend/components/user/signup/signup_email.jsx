import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignupEmail = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    props.clearAllErrors();
  }, [props.clearAllErrors]);

  const handleInput = (type) => (e) => {
    if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewUser({ email, password });
  };

  const renderErrors = () => {
    if (props.errors && props.errors.length > 0) {
      return (
        <ul className="signup-errors-container">
          {props.errors.map((error, idx) => (
            <li className="signup-error" key={idx}>{error}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const onSignupClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="signup-email-page-container">
      <div className="signup-email-page-after-nav">
        <div className="signup-email-header-flex-container">
          <div className="signup-email-header">
            <ul className="signup-email-header-texts">
              <li>
                Sign up with{' '}
                <a href="#signup" onClick={onSignupClick}>
                  Facebook{' '}
                </a>
                or{' '}
                <a href="#signup" onClick={onSignupClick}>
                  Google
                </a>.
              </li>
            </ul>

            <div className="signup-email-line-divider-container">
              <div className="signup-email-line-divider" />
              <div className="signup-email-text-divider">or</div>
              <div className="signup-email-line-divider" />
            </div>
          </div>

          <div className="signup-email-form-container">
            <form className="signup-email-form" onSubmit={handleSubmit}>
              <label>
                Email
                <input
                  className="signup-email-input"
                  type="email"
                  value={email}
                  onChange={handleInput('email')}
                />
              </label>

              <label>
                Password
                <input
                  className="signup-email-input"
                  type="password"
                  value={password}
                  onChange={handleInput('password')}
                />
              </label>

              {renderErrors()}

              <div className="signup-email-newsletter-and-email-container">
                <div className="signup-email-newsletter-checkbox-container">
                  <input type="checkbox" />
                  <p>
                    I would like to receive emails with likes, comments, replies and updates from Osnap.&nbsp;
                    <a href="#signup">Learn more.</a>
                  </p>
                </div>
              </div>

              <input className="signup-email-form-submit" type="submit" value="Sign Up" />
            </form>
          </div>

          <div className="signup-email-page-TOS-container">
            <li className="signup-email-page-TOS">
              By signing up, you agree to our&nbsp;
              <a href="#signup">Terms of Service.</a>
            </li>

            <li className="signup-email-page-TOS">
              Already have an account?
              <Link className="nav-btn" id="login" to="/login">
                Log in
              </Link>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupEmail;
