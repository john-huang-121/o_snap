import { connect } from 'react-redux';
import HomepageDisplay from './homepage_display';
import { fetchUsers } from '../../actions/users_actions';
import { fetchPictures } from '../../actions/pictures_actions';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    session: state.session.currentUserId,
    pictures: state.entities.pictures
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPictures: () => dispatch(fetchPictures())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageDisplay);
