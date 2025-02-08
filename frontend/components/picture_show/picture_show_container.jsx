import { connect } from 'react-redux';
import { fetchPicture, removePicture } from '../../actions/pictures_actions';
import PictureShow from './picture_show';

const mapStateToProps = (state, ownProps) => {
  return {
    picture: state.entities.pictures[ownProps.match.params.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPicture: (id) => dispatch(fetchPicture(id)),
    // removePicture: (id) => dispatch(removePicture(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureShow);
