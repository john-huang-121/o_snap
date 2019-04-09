/* eslint-disable no-unused-expressions */
import React from 'react';
import NavBarContainer from '../../navbar/navbar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
 
    this.checkProfilePic = this.checkProfilePic.bind(this);
    this.checkLikers = this.checkLikers.bind(this);
    this.checkFollowers = this.checkFollowers.bind(this);
    this.checkFollows = this.checkFollows.bind(this);
    this.checkCoverPicture = this.checkCoverPicture.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.checkPicture = this.checkPicture.bind(this);
  }

  componentDidMount() {
    this.props.fetchPictures();
  }

  componentDidUpdate() {
    let cover = document.getElementById('cover-picture');
    window.addEventListener("scroll", () => {
      cover.style.transform = "translate3d(0px," + window.pageYOffset + "px, 0px)";
    });
  }//should add limit users on submitting only landscape images

  checkProfilePic() {
    let profilePicURL;

    this.props.users[this.props.currentPageId]
      ? profilePicURL = String(this.props.users[this.props.currentPageId].profile_pic)
      : profilePicURL = null;

    return profilePicURL;
  }

  checkCoverPicture() {
    if (this.props.users[this.props.currentPageId]) {
      return <img className="profile-cover-picture" id="cover-picture" src={this.props.users[this.props.currentPageId].profile_cover} />;
    } else {
      return <div className="profile-null-cover-picture" id="cover-picture">
          <p>Please upload a cover picture</p>
        </div>;
    }
  }

  checkLikers() {
    let totLikes;

    this.props.users[this.props.currentPageId]
      ? totLikes = String(this.props.users[this.props.currentPageId].likers.num_likes)
      : totLikes = "#";

    return totLikes;
  }

  checkUsername() {
    if (this.props.users[this.props.currentPageId]) {
      return <p>{this.props.users[this.props.currentPageId].email}</p>;
    } else {
      return <p>No name</p>;
    }
  }

  checkFollowers() {
    if (this.props.users[this.props.currentPageId]) {
      let numberofFollowers = 0;
      
      Object.values(this.props.users[this.props.currentPageId].followers).forEach((follower) => {
        if (follower === true) {
          numberofFollowers++;
        }
      });      
      return numberofFollowers;
    } else {
      return "#";
    }
  }

  checkFollows() {
    if (this.props.users[this.props.currentPageId]) {
      let numberofFollows = 0;
      
      Object.values(this.props.users[this.props.currentPageId].follows).forEach((follow) => {
        if (follow === true) {
          numberofFollows++;
        }
      })
      return numberofFollows;
    } else {
      return "#"
    }
  }

  checkPicture() {
    const allUserPictures = [];
    Object.values(this.props.pictures).forEach( picture => {
      if (picture.user_id == this.props.currentPageId) {
        allUserPictures.push(
          <img key={picture.id} className='user-account-picture'src={picture.pictureUrl} />
        );
      }
    })
    if (allUserPictures.length !== 0) {
      return (
        <div className='user-account-picture-container'>
          {allUserPictures}
        </div>
      );
    } else {
      return (
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
      );
    }
  }

  render() {
    return (
    <div className='profile-container'>
      <NavBarContainer />
      <div className='profile-cover-avatar-buttons-container'>
        {this.checkCoverPicture()}
        <img className='profile-avatar-picture' src={this.checkProfilePic()}/>
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
          <li>{this.checkLikers()} Affection</li>
          <li># Photo Views</li>
          <li>{this.checkFollowers()} Followers</li>
          <li>{this.checkFollows()} Following</li>
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
      {this.checkPicture()}
    </div>
    );
  }
}

export default Profile;