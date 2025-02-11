import { connect } from 'react-redux';
import HomepageDisplay from './homepage_display';
import { fetchUsers } from '../../actions/users_actions';
import { fetchPictures } from '../../actions/pictures_actions';
import { fetchFollows } from '../../actions/follows_actions';
import { fetchLikes } from '../../actions/likes_actions';


const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    session: state.session.currentUserId,
    pictures: state.entities.pictures,
    followers: state.entities.followers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPictures: () => dispatch(fetchPictures()),
    fetchFollows: () => dispatch(fetchFollows()),
    fetchLikes: () => dispatch(fetchLikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageDisplay);
