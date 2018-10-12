import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as actions from './actions/session_actions';
import * as userActions from './actions/users_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUserId) {
    preloadedState = {
      session: {
        currentUserId: window.currentUserId.currentUserId
      }
    };
  }

  const store = configureStore(preloadedState);
  const root = document.getElementById('root');

  //testing start
  window.fetchUser = userActions.fetchUser;
  window.fetchUsers = userActions.fetchUsers;
  window.createUser = actions.createNewUser;
  window.login = actions.login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing end

  ReactDOM.render(<Root store={store}/>, root);
});
