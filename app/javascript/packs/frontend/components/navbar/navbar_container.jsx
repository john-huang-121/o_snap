import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import { fetchPictures } from "../../actions/pictures_actions";
import { searchMatchingPictures } from "../../actions/search_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPictures: () => dispatch(fetchPictures()),
  searchMatchingPictures: (searchTerms) => dispatch(searchMatchingPictures(searchTerms))
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

