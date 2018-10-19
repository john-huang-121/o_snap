import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import SignupEmailContainer from './signup_email_container';
import SignupContainer from './signup_container';
import { Link } from 'react-router-dom';

class SignupHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupClicked: false
    };
  }

  onSignupClick() {
    return (e) => {
      this.setState({isSignupClicked: true});
    };
  }

  render () {
    return (
      <div>
        <NavbarContainer />
        {this.state.isSignupClicked ?
          <SignupEmailContainer /> :
          <SignupContainer onSignupClick={this.onSignupClick.bind(this)}/>}
      </div>
    );
  }
}

export default SignupHome;
