import { connect } from 'react-redux';
import SignupHome from './signup_home';

// const mapStateToProps = (state) => {
//   return {
//     UI: state.UI[state.session.currentUserId]
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUI: () => dispatch(fetchUI()) //need to pass in id?
//   };
// };

export default connect(null, null)(SignupHome);
