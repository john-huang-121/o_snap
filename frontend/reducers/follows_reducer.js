import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, REMOVE_FOLLOW } from '../actions/follows_actions';
import merge from 'lodash/merge';

export const followsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_FOLLOW:
      return merge({}, oldState, { [action.follow.id]: action.follow });
    case RECEIVE_FOLLOWS:
      return merge({}, action.follows);
    case REMOVE_FOLLOW:
      const newState = merge({}, oldState);
      delete newState[action.follow.id];
      return newState;
    default:
      return oldState;
  }
};

export default followsReducer;