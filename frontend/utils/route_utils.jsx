import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const AuthRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => Boolean(state.session.currentUserId));
  return loggedIn ? <Navigate to="/" /> : <Component {...rest} />;
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => Boolean(state.session.currentUserId));
  return loggedIn ? <Component {...rest} /> : <Navigate to="/signup" />;
};
