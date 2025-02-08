import React, { useState } from 'react';
import NavbarContainer from '../../navbar/navbar_container';
import SignupEmailContainer from './signup_email_container';
import Signup from './signup';

const SignupHome = () => {
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  const handleSignupClick = (e) => {
    setIsSignupClicked(true);
  };

  return (
    <div>
      <NavbarContainer />
      {isSignupClicked ? (
        <SignupEmailContainer />
      ) : (
        <Signup onSignupClick={handleSignupClick} />
      )}
    </div>
  );
};

export default SignupHome;
