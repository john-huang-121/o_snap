import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

//set up delete json.jbuilder for userscontroller
