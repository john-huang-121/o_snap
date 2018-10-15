import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import { withRouter } from 'react-router';
import SignupHome from './signup_home';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupHome));
