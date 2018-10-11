import { connect } from 'react-redux';
import { createNewUser, logout } from '../../actions/session_actions.js';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
