import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as actions from './actions/session_actions';

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
  window.login = actions.login;
  window.logout = actions.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing end

  ReactDOM.render(<Root store={store}/>, root);
});
