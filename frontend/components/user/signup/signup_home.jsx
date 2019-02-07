import React from 'react';
import NavbarContainer from '../../navbar/navbar_container';
import SignupEmailContainer from './signup_email_container';
import Signup from './signup';

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
          <Signup onSignupClick={this.onSignupClick.bind(this)}/>}
      </div>
    );
  }
}

export default SignupHome;
