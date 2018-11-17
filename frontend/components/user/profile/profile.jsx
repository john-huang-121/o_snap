/* eslint-disable no-unused-expressions */
import React from 'react';
import NavBarContainer from '../../navbar/navbar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='profile-container'>
      <NavBarContainer />
      <div className='profile-cover-avatar-buttons-container'>
        <img className='profile-cover-picture' />
        <img className='profile-avatar-picture' />
        <div className='profile-buttons-container-container'>
          <ul className='profile-buttons-container'>
            <li>...</li>
            <li>arrow</li>
            <li>Complete your profiles</li>
          </ul>
        </div>
      </div>
      <h1>Name</h1>
      <div className='profile-details'>
        <ul className='profile-details-container'>
          <li># Affection</li>
          <li># Photo Views</li>
          <li># Followers</li>
          <li># Following</li>
        </ul>
      </div>
      <div className='profile-tabs'>
        <ul className='profile-tabs-container'>
          <li>PHOTOS</li>
          <li>GALLERIES</li>
          <li>GROUPS</li>
          <li>ABOUT</li>
        </ul>
      </div>
      <div className='profile-grid'>
      </div>
    </div>
    );
  }
}

export default Profile;