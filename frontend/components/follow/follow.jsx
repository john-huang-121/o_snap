import React from 'react';

export const Follow = ({ user }) => {
  if (user === 1) {
    return (
      <button className='profile-header-follow-user-button'>+ Follow</button>
    );
  } else {
    return (
      <button className='profile-header-follow-button'>+ Follow</button>
    );
  }
}