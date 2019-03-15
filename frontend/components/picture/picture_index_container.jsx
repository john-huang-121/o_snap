import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPictures, fetchPicture, removePicture } from '../../actions/pictures_actions';
import { createFollow, deleteFollow } from '../../actions/follows_actions';
import { fetchUsers } from '../../actions/users_actions';
import PictureIndex from './picture_index';

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return {
    pictures: state.entities.pictures,
    users: state.entities.users,
    followers: state.entities.followers,
    currentUser: state.session.currentUserId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchPicture: (id) => dispatch(fetchPicture(id)),
    removePicture: (id) => dispatch(removePicture(id)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (id) => dispatch(deleteFollow(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PictureIndex)
);
