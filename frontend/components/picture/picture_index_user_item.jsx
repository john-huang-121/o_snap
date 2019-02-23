import React from 'react';
import { Link } from 'react-router-dom';
import FollowContainer from '../follow/follow_container';
const Timestamp = require('react-timestamp');

const PictureIndexUserItem = ({ user, picture, deletePicture }) => {
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

          <a href='#' className='picture-index-item-user-like'>
            <ul className='picture-index-item-user-like-icon'>
              <li>500</li>
            </ul>
          </a>
        </div>
      </div>

      <div className='picture-index-item-user-desc'>
        {picture.description}
      </div>
    </ul>);
};

export default PictureIndexUserItem;
