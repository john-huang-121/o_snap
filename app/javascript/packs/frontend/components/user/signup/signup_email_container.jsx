import { connect } from 'react-redux';
import { createNewUser, clearAllErrors } from '../../../actions/session_actions';
import { fetchUsers } from "../../../actions/users_actions";
import SignupEmail from './signup_email';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    entities: state.entities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
    clearAllErrors: () => dispatch(clearAllErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupEmail);
