import React from 'react';
import { Link } from 'react-router-dom';
import FollowContainer from '../follow/follow_container';
const Timestamp = require('react-timestamp');

const FeedItem = ({ user, picture, deletePicture, openModal }) => {

  return (
    <ul className='picture-index-items-container'>
      <div href='#' className='picture-index-item'>
        <div className='picture-index-header-container'>
          <li className='profile-pic'></li>
          <div className='profile-header-texts-container'>
            <div className='profile-header-texts'>
              <Link to={`/user/1`}>Osnap</Link>
              <ul className='profile-header-texts-published'>published a Gallery</ul>
            </div>
            <Timestamp className='profile-gallery-timestamp'
              time={picture.created_at} format='ago' />
          </div>
          <div className='profile-header-follow-container'>
            <FollowContainer user={user} />
          </div>
        </div>
        <button onClick={() => { openModal(picture) }}>
          <img className='picture-index-item-picture'
            src={picture.pictureUrl} />
        </button>
        <Link to={`/pictures/${picture.id}`}
          className='picture-index-item-title'>{picture.title}
        </Link>
      </div>
    </ul>);
};

export default FeedItem;
