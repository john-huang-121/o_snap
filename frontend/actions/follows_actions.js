import * as APIUtils from '../utils/follows_utils';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const fetchFollows = () => {
  return dispatch => {
    return APIUtils.fetchFollows().then(follows => {
      return dispatch(receiveFollows(follows));
    });
  };
};

export const createFollow = follow => {
  return dispatch => {
    return APIUtils.createFollow(follow).then(_follow => {
      return dispatch(receiveFollow(_follow));
    });
  };
};

export const deleteFollow = id => {
  return dispatch => {
    return APIUtils.deleteFollow(id).then(follow => {
      return dispatch(removeFollow(follow));
    });
  };
};