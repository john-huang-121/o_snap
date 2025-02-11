import React, { useState, useEffect } from 'react';
import FeedItem from './feed_item';
import FeedUserItem from './feed_user_item';
import ModalContainer from '../modal/picture_modal_container';

const Feed = (props) => {
  const { users, currentUser, pictures, deletePicture, openModal, modalOpen, modalPicture } = props;
  const [feedPictures, setFeedPictures] = useState(null);

  useEffect(() => {
    if (users && Object.keys(users).length > 0 && users[currentUser]) {
      const currentUserFollows = Object.entries(users[currentUser].follows);
      const userFollowedArr = currentUserFollows
        .filter(([id, isFollowed]) => isFollowed === true)
        .map(([id]) => Number(id));

      const dirtyCurrentUserFollowedPictures = Object.values(pictures).map((picture) => {
        if (userFollowedArr.includes(picture.user_id)) {
          if (picture.user_id === 1) {
            return (
              <FeedItem
                key={picture.id}
                picture={picture}
                user={users[1]}
                deletePicture={deletePicture}
                openModal={openModal}
              />
            );
          } else if (picture.user_id == null) { // This ensures that the recently uploaded pic gets shown.
            return (
              <FeedUserItem
                key={picture.id}
                picture={picture}
                user={users[currentUser]}
                deletePicture={deletePicture}
                openModal={openModal}
              />
            );
          } else {
            return (
              <FeedUserItem
                key={picture.id}
                picture={picture}
                user={users[picture.user_id]}
                deletePicture={deletePicture}
                openModal={openModal}
              />
            );
          }
        }
        return null;
      });

      const cleanCurrentUserFollowedPictures = dirtyCurrentUserFollowedPictures.filter(el => el);
      if (cleanCurrentUserFollowedPictures.length === 0) {
        setFeedPictures(<p>No One Followed. Go find new people to follow in Discover!</p>);
      } else {
        setFeedPictures(cleanCurrentUserFollowedPictures);
      }
    } else {
      setFeedPictures(<p>Loading</p>);
    }
  }, [users, currentUser, pictures, deletePicture, openModal]);

  return (
    <div className="homepage-user-feed-gallery-container">
      {feedPictures}
      {modalOpen ? <ModalContainer picture={modalPicture} /> : null}
    </div>
  );
};

export default Feed;
