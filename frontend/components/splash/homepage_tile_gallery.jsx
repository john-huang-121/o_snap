import React from 'react';
import HomepageTile from './homepage_tile';

function HomepageTileGallery(props) {
  if (props.whichTab === 'people') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-people'>
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people1.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people2.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people3.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people4.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people5.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people6.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people7.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/people8.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'landscapes') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-landscapes'>
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape1.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape2.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape3.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape4.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape5.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape6.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape7.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape8.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'nature') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-nature'>
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/nature1.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/nature2.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/nature3.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/nature4.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/nature5.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/nature6.jpg'} />
        <HomepageTile parrotPic={true} picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/nature7.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/landscape4.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'city') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-city'>
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city1.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city2.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city3.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city4.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city5.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city6.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city7.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/city8.jpg'} />
      </div>
    )
  } else if (props.whichTab === 'animals') {
    return (
      <div className='homepage-top-photos-grid-container' id='unlog-animals'>
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal1.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal2.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal3.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal4.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal5.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal6.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal7.jpg'} />
        <HomepageTile picUrl={'https://osnap-development.s3.us-west-1.amazonaws.com/animal8.jpg'} />
      </div>
    )
  }
}

export default HomepageTileGallery;