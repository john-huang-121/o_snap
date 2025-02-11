import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './frontend/components/root.jsx';
import configureStore from './frontend/store/store.js';
import * as sessionActions from './frontend/actions/session_actions.js';
import * as followsActions from './frontend/actions/follows_actions.js';

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

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import HelloMessage from '../frontend/store/HelloMessage';

// const container = document.getElementById('root');
// const root = createRoot(container);

// document.addEventListener('DOMContentLoaded', () => {
//   root.render(<HelloMessage name="World" />);
// });