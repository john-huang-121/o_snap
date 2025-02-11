import { connect } from 'react-redux';
import { fetchPictures, fetchPicture, removePicture } from '../../actions/pictures_actions';
import { fetchComments, createComment, removeComment, updateComment } from '../../actions/comments_actions';
import { fetchUsers } from '../../actions/users_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  return {
    pictures: state.entities.pictures,
    picture: ownProps.picture,
    users: state.entities.users,
    followers: state.entities.followers,
    currentUser: state.session.currentUserId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    removeComment: (id) => dispatch(removeComment(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchPicture: (id) => dispatch(fetchPicture(id)),
    removePicture: (id) => dispatch(removePicture(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);