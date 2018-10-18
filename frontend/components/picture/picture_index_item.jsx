import React from 'react';
import { Link } from 'react-router-dom';
const Timestamp = require('react-timestamp');

const PictureIndexItem = ({ picture, deletePicture }) => {
  return (
    <ul className='picture-index-items-container'>
      <li className='picture-index-item'>
        <div className='picture-index-header-container'>
          <li className='profile-pic'></li>
          <div className='profile-header-texts-container'>
            <div className='profile-header-texts'>
              <a href='#'>Osnap</a>
              <ul className='profile-header-texts-published'>published a Gallery</ul>
            </div>
            <Timestamp className='profile-gallery-timestamp'
              time={picture.created_at} format='ago' />
          </div>
        </div>
        <img className='picture-index-item-picture'
          src={picture.pictureUrl} />
        <h1>Editor's Choice: {picture.title}</h1>
      </li>
    </ul>);
};
// <button onClick={() => deletePicture(picture.id)}>Delete Picture</button>

export default PictureIndexItem;
