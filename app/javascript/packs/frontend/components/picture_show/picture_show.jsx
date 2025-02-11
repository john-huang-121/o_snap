import React, { useEffect } from 'react';

const PictureShow = ({ fetchPicture, pictureId, picture }) => {
  useEffect(() => {
    fetchPicture(pictureId);
  }, [fetchPicture, pictureId]);

  return (
    <div className='picture-show-container'>
      {picture ? (
        <img src={picture.pictureUrl} alt="Picture Show" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PictureShow;
