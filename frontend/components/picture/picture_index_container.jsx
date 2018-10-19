import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPictures, fetchPicture, removePicture }
  from '../../actions/pictures_actions';
import { fetchUsers } from '../../actions/users_actions';
import PictureIndex from './picture_index';

const mapStateToProps = (state) => {
  return {
    pictures: Object.values(state.entities.pictures),
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchPicture: (id) => dispatch(fetchPicture(id)),
    removePicture: (id) => dispatch(removePicture(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PictureIndex)
);
