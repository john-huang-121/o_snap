import { connect } from 'react-redux';
import HomepageDisplay from './homepage_display';
import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    session: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageDisplay);
