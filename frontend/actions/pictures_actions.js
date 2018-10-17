import * as APIUtils from '../utils/pictures_utils';

export const RECEIVE_ALL_PICTURES = 'RECEIVE_ALL_PICTURES';
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const DELETE_PICTURE = 'DELETE_PICTURE';

export const receiveAllPictures = (pictures) => {
  return {
    action: RECEIVE_ALL_PICTURES,
    pictures
  };
};

export const receivePicture = (picture) => {
  return {
    action: RECEIVE_PICTURE,
    picture
  };
};

export const deletePicture = () => {
  return {
    action: DELETE_PICTURE,
  };
};

export const fetchPictures = () => {
  return (dispatch) => {
    return APIUtils.fetchPictures().then((pictures) => {
      return dispatch(receiveAllPictures(pictures));
    }
    // , err => {
    //   return dispatch(receiveAllPictures(err.responseJSON));
    //   }
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
