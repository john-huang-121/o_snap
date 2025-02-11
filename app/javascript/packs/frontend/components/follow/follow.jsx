import React, { useState, useEffect, useCallback } from 'react';

//Need to update all follow buttons when one is clicked
const Follow = ({ followers, user, currentUser, createFollow, deleteFollow }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followedPrimaryId, setFollowedPrimaryId] = useState(null);

  const checkIfFollowed = useCallback(() => {
    if (followers) {
      const allFollows = Object.keys(followers);
      allFollows.forEach(followPrimaryId => {
        const follow = followers[followPrimaryId];
        if (follow.user_id === user.id && follow.follower_id === currentUser) {
          setIsFollowed(true);
          setFollowedPrimaryId(followPrimaryId);
        }
      });
    }
  }, [followers, user, currentUser]);

  useEffect(() => {
    checkIfFollowed();
  }, [checkIfFollowed])
  
  const handleClick = (e) => {
    e.preventDefault();

    if (!isFollowed) {
      createFollow({ user_id: user.id, follower_id: currentUser })
        .then(() => {
          checkIfFollowed();
        })
        .then(() => {
          window.location.reload(false);
        });
    } else {
      deleteFollow(followedPrimaryId)
        .then(() => {
          setIsFollowed(false);
          setFollowedPrimaryId(null);
        })
        .then(() => {
          window.location.reload(false);
        });
    }
  };

  const renderFollowButton = () => {
    // editor account is Id 1 with a unique style.
    if (user.id === 1) {
      return isFollowed ? (
        <button
          className='profile-header-follow-user-button follow-clicked'
          onClick={handleClick}
        >
          - Unfollow
        </button>
      ) : (
        <button
          className='profile-header-follow-user-button'
          onClick={handleClick}
        >
          + Follow
        </button>
      );
    } else {
      return isFollowed ? (
        <button
          className='profile-header-follow-button follow-clicked'
          onClick={handleClick}
        >
          - Unfollow
        </button>
      ) : (
        <button
          className='profile-header-follow-button'
          onClick={handleClick}
        >
          + Follow
        </button>
      );
    }
  };

  return renderFollowButton();
}

export default Follow;