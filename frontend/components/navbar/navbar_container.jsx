import Navbar from './navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import { fetchPictures } from "../../actions/pictures_actions";

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
  fetchPictures: () => dispatch(fetchPictures())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
