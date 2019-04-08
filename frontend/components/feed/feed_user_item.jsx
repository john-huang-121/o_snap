import React from 'react';
import { Link } from 'react-router-dom';
import FollowContainer from '../follow/follow_container';
import LikeContainer from '../like/like_container';
import CommentIndexContainer from '../comment/comment_index_container';
const Timestamp = require('react-timestamp');

const FeedUserItem = ({ user, picture, deletePicture }) => {
  return (
    <ul className='picture-index-items-user-container'>
      <div href='#' className='picture-index-item-user-header-container'>
        <img className='picture-index-item-user-profile-pic' />
        <div className='picture-index-item-email-timestamp-container'>
          <p>{user.email}</p>
          <Timestamp className='profile-gallery-timestamp'
            time={picture.created_at} format='ago' />
        </div>
        <div className='profile-header-follow-user-container'>
          <FollowContainer user={user} />
        </div>
      </div>

      <Link to={`/pictures/${picture.user_id}`}
        className='picture-index-item-user-image-container'>
          <img src={picture.pictureUrl}
            className='picture-index-item-user-image' />
      </Link>

      <div className='picture-index-item-user-title-desc-act-container'>
        <div className='picture-index-item-user-title'>
          {picture.title}
        </div>

        <div className='picture-index-item-user-act'>
          <a href='#' className='picture-index-item-user-messenger'>
            <li className='picture-index-item-user-messenger-icon' />
          </a>

          <a href='#' className='picture-index-item-user-comment'>
            <li className='picture-index-item-user-comment-icon' />
          </a>

          <a href='#' className='picture-index-item-user-gallery'>
            <li className='picture-index-item-user-gallery-icon' />
          </a>

          <LikeContainer picture={picture} />
        </div>
      </div>

      <div className='picture-index-item-user-desc'>
        {picture.description}
      </div>

      <CommentIndexContainer picture={picture} />
    </ul>);
};

export default FeedUserItem;
