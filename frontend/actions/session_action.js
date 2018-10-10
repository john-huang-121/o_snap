import * as APIUtils from '../utils/session.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

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

export const createNewUser = (formUser) => {
  return dispatch => {
    return APIUtils.createUser(formUser).then(user => {
      return dispatch(receiveCurrentUser(user));
    });
  };
};

export const login = (formUser) => {
  return dispatch => {
    return APIUtils.createSession(formUser).then(user => {
      return dispatch(receiveCurrentUser(user));
    });
  };
};

export const logout = () => {
  return dispatch => {
    return APIUtils.deleteSession().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};
