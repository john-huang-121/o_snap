import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import Navbar from './navbar';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  currentUserId: state.session.currentUserId,
  isSignup: ownProps.location.pathname === '/signup',
  isLogin: ownProps.location.pathname === '/login',
  isSplash: ownProps.location.pathname === '/'
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

//set up delete json.jbuilder for userscontroller
