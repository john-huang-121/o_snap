import * as APIUtils from "../utils/comments_utils";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  follows
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchComments = () => {
  return dispatch => {
    return APIUtils.fetchComments().then(comments => {
      return dispatch(receiveComments(comments));
    });
  };
};

export const createComment = comment => {
  return dispatch => {
    return APIUtils.createComment(comment).then(_comment => {
      return dispatch(receiveComment(_comment));
    });
  };
};

export const updateComment = comment => {
  return dispatch => {
    return APIUtils.updateComment(comment).then(_comment => {
      return dispatch(receiveComment(_comment));
    });
  };
};

export const deleteComment = id => {
  return dispatch => {
    return APIUtils.deleteComment(id).then(comment => {
      return dispatch(removeComment(comment));
    });
  };
};
