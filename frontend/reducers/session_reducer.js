import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_action';
import { merge } from 'lodash/merge';

const _nullSession = {
  currentUser: null
};

export const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return oldState;
  }
};
