import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users_actions';
import { uploadPicture } from '../../actions/pictures_actions';
import Upload from './upload';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUserId
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  uploadPicture: (pictureForm) => dispatch(uploadPicture(pictureForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
