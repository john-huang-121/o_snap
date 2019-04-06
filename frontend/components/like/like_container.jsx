import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchLikes, createLike, deleteLike } from '../../actions/likes_actions';
import { fetchPictures } from '../../actions/pictures_actions';
import Like from './like';

const mapStateToProps = (state, ownProps) => {
  return {
    picture: ownProps.picture,
    pictures: state.entities.pictures,
    currentUser: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    fetchPictures: () => dispatch(fetchPictures()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Like)
);