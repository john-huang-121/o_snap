import React from 'react';
import { Link } from 'react-router-dom';


const PictureIndexItem = ({ picture, deletePicture }) => {
  return (
    <li className='Picture-index-item'>
      {picture.id}
      {picture.title}
      {picture.description}

      <img src={picture.photoUrl} />
      <button onClick={() => deletePicture(picture.id)}>Delete Picture</button>
    </li>);
};

export default PictureIndexItem;
