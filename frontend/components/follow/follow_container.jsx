import { connect } from 'react-redux';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follows_actions';
import Follow from './follow';
// import { fetchPictures, fetchPicture, removePicture } from '../../actions/pictures_actions';
// import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    followers: state.entities.followers,
    pictures: ownProps.pictures,
    users: ownProps.users,
    currentUser: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (id) => dispatch(deleteFollow(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);