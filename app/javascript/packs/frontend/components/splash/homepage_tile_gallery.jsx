import React from 'react';
import HomepageTile from './homepage_tile';

const getS3Url = (filename) => {
  const baseUrl = "https://osnap-development.s3.us-west-1.amazonaws.com/";
  return `${baseUrl}${filename}`;
};

const tileData = {
  people: [
    'people1.jpg',
    'people2.jpg',
    'people3.jpg',
    'people4.jpg',
    'people5.jpg',
    'people6.jpg',
    'people7.jpg',
    'people8.jpg'
  ].map(getS3Url),

  landscapes: [
    'landscape1.jpg',
    'landscape2.jpg',
    'landscape3.jpg',
    'landscape4.jpg',
    'landscape5.jpg',
    'landscape6.jpg',
    'landscape7.jpg',
    'landscape8.jpg'
  ].map(getS3Url),

  nature: [
    'nature1.jpg',
    'nature2.jpg',
    'nature3.jpg',
    'nature4.jpg',
    'nature5.jpg',
    'nature6.jpg',
    'nature7.jpg', // special case: for this tile, pass parrotPic={true}
    'landscape4.jpg'
  ].map(getS3Url),

  city: [
    'city1.jpg',
    'city2.jpg',
    'city3.jpg',
    'city4.jpg',
    'city5.jpg',
    'city6.jpg',
    'city7.jpg',
    'city8.jpg'
  ].map(getS3Url),

  animals: [
    'animal1.jpg',
    'animal2.jpg',
    'animal3.jpg',
    'animal4.jpg',
    'animal5.jpg',
    'animal6.jpg',
    'animal7.jpg',
    'animal8.jpg'
  ].map(getS3Url)
};

function HomepageTileGallery({ whichTab }) {
  const urls = tileData[whichTab];
  if (!urls) return null;

  // Build a container id based on the tab (e.g. 'unlog-people')
  const containerId = `unlog-${whichTab}`;

  return (
    <div className="homepage-top-photos-grid-container" id={containerId}>
      {urls.map((url, index) => (
        <HomepageTile
          key={index}
          picUrl={url}
          // For the 'nature' tab, if the tile is at index 6, pass parrotPic={true}
          {...(whichTab === 'nature' && index === 6 ? { parrotPic: true } : {})}
        />
      ))}
    </div>
  );
}

export default HomepageTileGallery;
