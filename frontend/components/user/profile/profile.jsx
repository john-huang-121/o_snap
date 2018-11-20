/* eslint-disable no-unused-expressions */
import React from 'react';
import NavBarContainer from '../../navbar/navbar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let cover = document.getElementById('cover-picture');
    window.addEventListener("scroll", () => {
      cover.style.transform = "translate3d(0px," + window.pageYOffset + "px, 0px)";
    });
  }//should add limit users on submitting only landscape images

  noCoverPicture() {
    return (
      <div className='profile-null-cover-pic'>
        
      </div>
    );
  }

  hasCoverPicture() {
    return (
      <img className='profile-cover-picture' id="cover-picture" />
    );
  }

  render() {
    return (
    <div className='profile-container'>
      <NavBarContainer />
      <div className='profile-cover-avatar-buttons-container'>
        {this.noCoverPicture()}
        <img className='profile-avatar-picture' />
        <div className='profile-buttons-container-container'>
          <ul className='profile-buttons-container'>
            <li>...</li>
            <li>arrow</li>
            <li>Complete your profiles</li>
          </ul>
        </div>
      </div>
      <div className='profile-details-container'>
        <div className='profile-username-container'>
          <h1 className='profile-username'>Name</h1>
        </div> 
        <ul className='profile-details'>
          <li># Affection</li>
          <li># Photo Views</li>
          <li># Followers</li>
          <li># Following</li>
        </ul>
      </div>
      <div className='profile-tabs-container'>
        <ul className='profile-tabs'>
          <li>PHOTOS</li>
          <li>GALLERIES</li>
          <li>GROUPS</li>
          <li>ABOUT</li>
        </ul>
      </div>
      <div className='profile-grid'>
        <div className='profile-null'>
          <img className='profile-null-image' />
          <ul className='profile-null-content'>
            <li>You haven't uploaded any photos yet.</li>
            <li>Get the most out of 500px by uploading your photos and be seen by our global community.</li>
          </ul>
          <button>Upload now</button> 
        </div> 
      </div>
    </div>
    );
  }
}

export default Profile;