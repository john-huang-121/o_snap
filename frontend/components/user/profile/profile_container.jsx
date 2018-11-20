import { connect } from "react-redux";
import { fetchUsers } from '../../../actions/users_actions';
import { withRouter } from "react-router";
import Profile from "./profile";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  currentUserId: state.session.currentUserId,
  users: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
