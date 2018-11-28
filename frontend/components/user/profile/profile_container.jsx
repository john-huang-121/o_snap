import { connect } from "react-redux";
import { fetchUsers } from '../../../actions/users_actions';
import { withRouter } from "react-router";
import Profile from "./profile";

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  currentPageId: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
