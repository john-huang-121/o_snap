import React from 'react';
import { Link } from 'react-router-dom';
const Timestamp = require('react-timestamp');

const PictureIndexItem = ({ picture, deletePicture }) => {
  return (
    <ul className='picture-index-items-container'>
      <div href='#' className='picture-index-item'>
        <div className='picture-index-header-container'>
          <li className='profile-pic'></li>
          <div className='profile-header-texts-container'>
            <div className='profile-header-texts'>
              <li href='#'>Osnap</li>
              <ul className='profile-header-texts-published'>published a Gallery</ul>
            </div>
            <Timestamp className='profile-gallery-timestamp'
              time={picture.created_at} format='ago' />
          </div>
        </div>
        <Link to={`/pictures/${picture.id}`}>
          <img className='picture-index-item-picture'
            src={picture.pictureUrl} />
        </Link>
        <Link to={`/pictures/${picture.id}`}
          className='picture-index-item-title'>{picture.title}</Link>
      </div>
    </ul>);
};
// <button onClick={() => deletePicture(picture.id)}>Delete Picture</button>

export default PictureIndexItem;