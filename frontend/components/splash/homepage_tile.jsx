import React from 'react';

function HomepageTile(props) {
  if (props.parrotPic) {
    return (
      <img className='homepage-top-photos-grid-item-parrot' src={props.picUrl} />
    )
  } else {
    return (
      <img className='homepage-top-photos-grid-item' src={props.picUrl} />
    )
  }
}

export default HomepageTile;