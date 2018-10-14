import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignupEmail from './signup_email';

// const mapStateToProps = (state) => {
//   return {
//
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (formUser) => dispatch(createNewUser(formUser))
  };
};

export default connect(null, mapDispatchToProps)(SignupEmail);
