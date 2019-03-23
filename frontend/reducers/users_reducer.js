import { RECEIVE_ALL_USER, RECEIVE_USER, DELETE_USER } from '../actions/users_actions';
import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, REMOVE_FOLLOW } from '../actions/follows_actions';

import merge from 'lodash/merge';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_USER:
      return action.users;
    case RECEIVE_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case DELETE_USER:
      delete newState[action.id];
      return newState;

    case RECEIVE_FOLLOW:
      newState[action.follow.follower_id].follows[action.follow.user_id] = true;
      newState[action.follow.user_id].followers[action.follow.follower_id] = true;
      return newState;

    case REMOVE_FOLLOW:
      newState[action.follow.follower_id].follows[action.follow.user_id] = false;
      newState[action.follow.user_id].followers[action.follow.follower_id] = false;
      return newState;

    default:
      return oldState;
  }
};