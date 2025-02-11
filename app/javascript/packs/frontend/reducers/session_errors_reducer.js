import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_CLEAR_ERRORS }
  from '../actions/session_actions';
// import merge from 'lodash/merge';

export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_CLEAR_ERRORS:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};
