import * as APIUtils from '../utils/pictures_utils';

export const RECEIVE_ALL_PICTURES = 'RECEIVE_ALL_PICTURES';
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const DELETE_PICTURE = 'DELETE_PICTURE';

export const receiveAllPictures = (pictures) => {
  return {
    type: RECEIVE_ALL_PICTURES,
    pictures
  };
};

export const receivePicture = (picture) => {
  return {
    type: RECEIVE_PICTURE,
    picture
  };
};

export const deletePicture = () => {
  return {
    type: DELETE_PICTURE,
  };
};

export const fetchPictures = () => {
  return dispatch => {
    return APIUtils.fetchPictures().then((pictures) => {
      return dispatch(receiveAllPictures(pictures));
      }
    );
  };
};

export const fetchPicture = (id) => {
  return (dispatch) => {
    return APIUtils.fetchPicture(id).then((picture) => {
      return dispatch(receivePicture(picture));
    }
    // , err => {
    //   return dispatch(receivePicture(err.responseJSON));
    //   }
    );
  };
};

export const removePicture = (id) => {
  return (dispatch) => {
    return APIUtils.deletePicture(id).then(() => {
      return dispatch(deletePicture());
    }
    // , err => {
    //   return dispatch(deletePicture(err.responseJSON));
    //   }
    );
  };
};
