/* eslint-disable no-unused-expressions */
import React from 'react';
import NavBarContainer from '../../navbar/navbar_container';
import Masonry from 'react-masonry-component';

class Profile extends React.Component {
  constructor(props) {
    super(props);
 
    this.checkCoverPicture = this.checkCoverPicture.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
  }

  componentWillMount() {
    this.props.fetchPictures();
  }
  componentDidUpdate() {
    let cover = document.getElementById('cover-picture');
    window.addEventListener("scroll", () => {
      cover.style.transform = "translate3d(0px," + window.pageYOffset + "px, 0px)";
    });
  }//should add limit users on submitting only landscape images

  checkCoverPicture() {
    if (this.props.users[this.props.currentPageId]) {
      return <img className="profile-cover-picture" id="cover-picture" src={this.props.users[this.props.currentPageId].profile_cover} />;
    } else {
      return <div className="profile-null-cover-picture" id="cover-picture">
          <p>Please upload a cover picture</p>
        </div>;
    }
  }

  checkUsername() {
    if (this.props.users[this.props.currentPageId]) {
      return <p>{this.props.users[this.props.currentPageId].email}</p>;
    } else {
      return <p>No name</p>;
    }
  }

  render() {
    const allUserPictures = [];
    Object.values(this.props.pictures).forEach( picture => {
      if (picture.user_id == this.props.currentPageId) {
        allUserPictures.push(
          <li className='user-account-pictures'>
            <img src={picture.pictureUrl} />
           </li>
        );
      }
    });

    console.log(allUserPictures);

    const masonryOptions = {
      transitionDuration: 0
    };

    return (
    <div className='profile-container'>
      <NavBarContainer />
      <div className='profile-cover-avatar-buttons-container'>
        {this.checkCoverPicture()}
        <img className='profile-avatar-picture' />
        <div className='profile-buttons-container-container'>
          <ul className='profile-buttons-container'>
            <li>...</li>
            <li>arrow</li>
            <li id="profile-complete">Complete your profiles</li>
          </ul>
        </div>
      </div>
      <div className='profile-details-container'>
        <div className='profile-username-container'>
          <h1 className='profile-username'>
            {this.checkUsername()}
          </h1>
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
        <Masonry className='profile-grid-masonry' options={masonryOptions}
          elementType={'ul'}>
          {allUserPictures}
        </Masonry>
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