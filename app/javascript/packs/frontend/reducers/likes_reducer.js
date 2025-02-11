import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/likes_actions';
import merge from 'lodash/merge';

export const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, action.likes);
    case RECEIVE_LIKE:
      return merge({}, oldState, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      const newState = merge({}, oldState);
      delete newState[action.like.id];
      return newState;
    default:
      return oldState;
  }
};

export default likesReducer;