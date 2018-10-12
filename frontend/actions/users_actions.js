import * as APIUtils from '../utils/users_util';

export const RECEIVE_ALL_USER = 'RECEIVE_ALL_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const DELETE_USER = 'DELETE_USER';
// export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USER,
    users
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const deleteUser = () => {
  return {
    type: DELETE_USER
  };
};

// export const receiveUserErrors = errors => {
//   return {
//     type: RECEIVE_USER_ERRORS,
//     errors
//   };
// };

export const fetchUsers = () => {
  return dispatch => {
    return APIUtils.retrieveUsers().then(returnedUser => {
      return dispatch(receiveAllUsers(returnedUser));
    }
    // , err => {
    //   return dispatch(receiveUser(err.responseJSON));
    //   }
    );
  };
};

export const fetchUser = (id) => {
  return dispatch => {
    return APIUtils.retrieveUser(id).then(returnedUser => {
      return dispatch(receiveUser(returnedUser));
    }
    // , err => {
      // return dispatch(receiveUser(err.responseJSON));
      // }
    );
  };
};

export const editUser = (formUser) => {
  return dispatch => {
    return APIUtils.updateUser(formUser).then(returnedUser => {
      return dispatch(receiveUser(returnedUser));
    }
    // , err => {
      // return dispatch(receiveUser(err.responseJSON));
      // }
    );
  };
};


export const destroyUser = (id) => {
  return dispatch => {
    return APIUtils.deleteUser(id).then((returnedId) => {
      return dispatch(deleteUser(returnedId));
    });
  };
};
