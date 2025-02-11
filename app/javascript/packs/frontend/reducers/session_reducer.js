import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullSession = {
  currentUserId: null
};

export const sessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.user.id }; //should be {action.users.id}
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return oldState;
  }
};
