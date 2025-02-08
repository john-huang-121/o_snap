import React, { useState, useEffect, useCallback } from 'react';

const Like = ({
  picture,
  currentUser,
  createLike,
  deleteLike,
  fetchPictures,
  pictures
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const checkLiked = useCallback(() => {
    let picKey = Object.keys(picture.likes);
    
    if (picture.likes === null || picture.likes === undefined) {
      setIsLiked(false);
      setLikes(0);
    } else if (picKey.includes(String(currentUser))) {
      setIsLiked(true);
      setLikes(picKey.length);
    } else {
      setIsLiked(false);
      setLikes(picKey.length);
    }
  }, [picture.likes, currentUser]);

  useEffect(() => {
    checkLiked();
  }, [checkLiked])

  const handleLike = (e) => {
    e.preventDefault();
    const pictureLikes = likes;
    if (!isLiked) {
      createLike({ picture_id: picture.id, liker_id: currentUser })
        .then(() => {
          setIsLiked(true);
          setLikes(pictureLikes + 1);
        })
        .then(() => fetchPictures());
    } else {
      const likeId = pictures[picture.id].likes[currentUser];
      deleteLike(likeId).then(() => {
        setIsLiked(false);
        setLikes(pictureLikes - 1);
      });
    }
  };

  return (
    <button className={`picture-index-item-user-${isLiked ? 'liked' : 'like' }`} onClick={handleLike}>
      <ul className='picture-index-item-user-like-icon'>
        <li className='picture-index-item-user-like-icon-number'>{likes}</li>
      </ul>
    </button>
  );
};

export default Like;