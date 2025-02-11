import { connect } from 'react-redux';
import { login, clearAllErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (formUser) => dispatch(login(formUser)),
    clearAllErrors: () => dispatch(clearAllErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
