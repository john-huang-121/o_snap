import * as APIUtils from "../utils/likes_utils";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});


export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const fetchLikes = () => {
  return dispatch => {
    return APIUtils.fetchLikes().then(likes => {
      return dispatch(receiveLikes(likes));
    });
  };
};

export const createLike = like => {
  return dispatch => {
    return APIUtils.createLike(like).then(_like => {
      return dispatch(receiveLike(_like));
    });
  };
};

export const deleteLike = id => {
  return dispatch => {
    return APIUtils.deleteLike(id).then(like => {
      return dispatch(removeLike(like));
    });
  };
};
