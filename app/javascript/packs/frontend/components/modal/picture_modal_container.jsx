import { connect } from 'react-redux';
import PictureModal from './picture_modal'

const mapStateToProps = (state) => {
  return {
    modalOpen: state.ui.modalOpen,
    picture: state.ui.picture,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch({type: 'MODAL_CHANGE', modalOpen: false})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureModal);