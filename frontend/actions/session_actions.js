import * as APIUtils from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const createNewUser = (formUser) => {
  return dispatch => {
    return APIUtils.createUser(formUser).then(returnedUser => {
      return dispatch(receiveCurrentUser(returnedUser));
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const login = (formUser) => {
  return dispatch => {
    return APIUtils.createSession(formUser).then(returnedUser => {
      return dispatch(receiveCurrentUser(returnedUser));
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    return APIUtils.deleteSession().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};
