import React from 'react';
import HomepageTile from './homepage_tile';

function HomepageTileGallery(props) {
  if (props.whichTab === 'people') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-people'>
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people1.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people2.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people3.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people4.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people5.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people6.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people7.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/people8.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'landscapes') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-landscapes'>
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape1.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape2.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape3.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape4.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape5.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape6.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape7.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape8.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'nature') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-nature'>
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature1.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature2.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature3.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature4.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature5.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature6.jpg'} />
        <HomepageTile parrotPic={true} picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature7.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape4.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'city') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-city'>
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city1.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city2.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city3.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city4.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city5.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city6.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city7.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/city8.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'animals') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-animals'>
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal1.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal2.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal3.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal4.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal5.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal6.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal7.jpg'} />
        <HomepageTile picUrl={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal8.jpg'} />
      </div>
    )
  }
}

export default HomepageTileGallery;