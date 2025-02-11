import React, { useEffect } from 'react';
import NavBarContainer from '../../navbar/navbar_container';

const Profile = (props) => {
  const { users, currentPageId, pictures, fetchPictures } = props;

  useEffect(() => {
    fetchPictures();
  }, [fetchPictures]);

  useEffect(() => {
    const cover = document.getElementById('cover-picture');
    if (cover) {
      const handleScroll = () => {
        cover.style.transform = `translate3d(0px, ${window.pageYOffset}px, 0px)`;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const checkProfilePic = () => {
    return users[currentPageId] ? String(users[currentPageId].profile_pic) : null;
  };

  const renderCoverPicture = () => {
    if (users[currentPageId]) {
      return (
        <img
          className="profile-cover-picture"
          id="cover-picture"
          src={users[currentPageId].profile_cover}
          alt="Cover"
        />
      );
    } else {
      return (
        <div className="profile-null-cover-picture" id="cover-picture">
          <p>Please upload a cover picture</p>
        </div>
      );
    }
  };

  const getTotLikes = () => {
    return users[currentPageId]
      ? String(users[currentPageId].likers.num_likes)
      : "#";
  };

  const renderUsername = () => {
    return users[currentPageId] ? (
      <p>{users[currentPageId].email}</p>
    ) : (
      <p>No name</p>
    );
  };

  const getFollowersCount = () => {
    if (users[currentPageId]) {
      const numberofFollowers = Object.values(users[currentPageId].followers).filter(
        (follower) => follower === true
      ).length;
      return numberofFollowers;
    }
    return "#";
  };

  const getFollowsCount = () => {
    if (users[currentPageId]) {
      const numberofFollows = Object.values(users[currentPageId].follows).filter(
        (follow) => follow === true
      ).length;
      return numberofFollows;
    }
    return "#";
  };

  const renderUserPictures = () => {
    const allUserPictures = Object.values(pictures)
      .filter((picture) => picture.user_id == currentPageId)
      .map((picture) => (
        <img
          key={picture.id}
          className="user-account-picture"
          src={picture.pictureUrl}
          alt="User Upload"
        />
      ));
    if (allUserPictures.length > 0) {
      return (
        <div className="user-account-picture-container">{allUserPictures}</div>
      );
    } else {
      return (
        <div className="profile-grid">
          <div className="profile-null">
            <img className="profile-null-image" alt="No uploads" />
            <ul className="profile-null-content">
              <li>You haven't uploaded any photos yet.</li>
              <li>
                Get the most out of 500px by uploading your photos and be seen by our global community.
              </li>
            </ul>
            <button>Upload now</button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="profile-container">
      <NavBarContainer />
      <div className="profile-cover-avatar-buttons-container">
        {renderCoverPicture()}
        <img
          className="profile-avatar-picture"
          src={checkProfilePic()}
          alt="Avatar"
        />
        <div className="profile-buttons-container-container">
          <ul className="profile-buttons-container">
            <li>...</li>
            <li>arrow</li>
            <li id="profile-complete">Complete your profiles</li>
          </ul>
        </div>
      </div>
      <div className="profile-details-container">
        <div className="profile-username-container">
          <h1 className="profile-username">{renderUsername()}</h1>
        </div>
        <ul className="profile-details">
          <li>{getTotLikes()} Affection</li>
          <li># Photo Views</li>
          <li>{getFollowersCount()} Followers</li>
          <li>{getFollowsCount()} Following</li>
        </ul>
      </div>
      <div className="profile-tabs-container">
        <ul className="profile-tabs">
          <li className="profile-tabs-working">PHOTOS</li>
          <li className="profile-tabs-not-working">GALLERIES</li>
          <li className="profile-tabs-not-working">GROUPS</li>
          <li className="profile-tabs-not-working">ABOUT</li>
        </ul>
      </div>
      {renderUserPictures()}
    </div>
  );
};

export default Profile;
