import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/root';
import configureStore from './store/store';
import * as sessionActions from './actions/session_actions';
import * as followsActions from './actions/follows_actions';

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
  const container = document.getElementById('root');

  // Testing start
  window.fetchFollows = followsActions.fetchFollows;
  window.createFollow = followsActions.createFollow;
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = createRoot(container);
  root.render(<Root store={store} />);
});
