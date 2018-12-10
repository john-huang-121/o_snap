import { connect } from "react-redux";
import { fetchUsers } from '../../../actions/users_actions';
import { fetchPictures } from '../../../actions/pictures_actions';
import { withRouter } from "react-router";
import Profile from "./profile";

const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
  currentPageId: ownProps.match.params.id,
  pictures: state.entities.pictures
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPictures: () => dispatch(fetchPictures()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
