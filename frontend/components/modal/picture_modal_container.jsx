import { connect } from 'react-redux';
import PictureModal from './picture_modal'

const mapStateToProps = (state) => {
  return {
    modalOpen: state.ui.modalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch({type: 'MODAL_CHANGE', modalOpen: true }),
    closeModal: () => dispatch({type: 'MODAL_CHANGE', modalOpen: false})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureModal);