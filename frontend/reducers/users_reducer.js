import { RECEIVE_ALL_USER, RECEIVE_USER, DELETE_USER } from '../actions/users_actions';

import merge from 'lodash/merge';

export const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_USER:
      return action.users;
    case RECEIVE_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case DELETE_USER:
      const newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};
