import React from 'react';

const HomepageTile = ({ parrotPic, picUrl }) => (
  <img
    className={parrotPic ? 'homepage-top-photos-grid-item-parrot' : 'homepage-top-photos-grid-item'}
    src={picUrl}
  />
);

export default HomepageTile;