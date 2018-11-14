import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <section className="signup-page-container">
        <div className="signup-page-after-nav">
          <div className="signup-form-flex-container">
            <div className="signup-buttons-header">
              <ul className="signup-buttons-header-texts">
                <li>Join OSnap</li>
                <li>
                  Share your photos, get inspired, and grow your skills
                </li>
              </ul>
            </div>

            <div className="signup-buttons">
              <button className="signup-facebook-button" onClick={this.props.onSignupClick()}>
                <div className="signup-facebook-icon" />
                <p>Continue with Facebook</p>
              </button>

              <button className="signup-google-button" onClick={this.props.onSignupClick()}>
                <div className="signup-google-icon" />
                <p>Continue with Google</p>
              </button>
            </div>

            <div className="signup-newsletter-and-email-container">
              <div className="signup-newsletter-checkbox-container">
                <input type="checkbox" />
                <p>
                  I would like to receive emails with likes, comments, replies and updates from Osnap.&nbsp;
                  <a href="#">Learn more.</a>
                </p>
              </div>

              <div className="signup-line-divider-container">
                <div className="signup-line-divider" />
                <div className="signup-text-divider">or</div>
                <div className="signup-line-divider" />
              </div>

              <button className="signup-email-button">
                <div className="signup-email-icon" />
                <Link className="signup-email-link" to="/signup" onClick={this.props.onSignupClick()}>
                  Continue with Email
                </Link>
              </button>
            </div>

            <div className="signup-page-TOS-container">
              <li className="signup-page-TOS">
                By signing up, you agree to our&nbsp;
                <a href="#">Terms of Service.</a>
              </li>

              <li className="signup-page-TOS">
                Already have an account?
                <Link className="nav-btn" id="login" to="/login">
                  Log in
                </Link>
              </li>
            </div>
          </div>
        </div>
      </section>;
  }
}

export default Signup;
