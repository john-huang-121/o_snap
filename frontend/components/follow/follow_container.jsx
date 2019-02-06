import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follows_actions';
import Follow from './follow';
// import { fetchPictures, fetchPicture, removePicture } from '../../actions/pictures_actions';
// import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    follows: state.follows,
    pictures: ownProps.pictures,
    users: ownProps.users,
    currentUser: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(createFollow);
  return {
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (id) => dispatch(deleteFollow(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Follow)
);