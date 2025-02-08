import React, { useState, useEffect, useCallback } from 'react';
// importing FeedItems and FeedUserItems as discover
import DiscoverItem from "../feed/feed_item";
import DiscoverUserItem from "../feed/feed_user_item";
import NavbarContainer from "../navbar/navbar_container";
import ModalContainer from "../modal/picture_modal_container";

const Discover = (props) => {
  const [pictures, setPictures] = useState(null);

  useEffect(() => {
    props.fetchUsers();
    props.fetchPictures();
  }, [])

  const currentUserNotFollowed = useCallback(() => {
    const currentUserData = props.users[props.currentUser];

    if (!currentUserData || !currentUserData.follows) return;

    // Convert follows to an array and filter for unfollowed users.
    const userNotFollowedArr = Object.entries(currentUserData.follows)
      .filter(([_, isFollowed]) => isFollowed === false)
      .map(([userId]) => Number(userId));

    const dirtyCurrentUserNotFollowedPictures = Object.values(this.props.pictures).map((picture) => {
      if (userNotFollowedArr.includes(picture.user_id)) {
        if (picture.user_id === 1) {
          return (
            <DiscoverItem key={picture.id} picture={picture}
              user={this.props.users[1]}
              deletePicture={this.props.deletePicture}
              openModal={this.props.openModal}
            />
          );
        }
        else {
          return (
            <DiscoverUserItem key={picture.id} picture={picture}
              user={this.props.users[picture.user_id ?? this.props.currentUser]}
              deletePicture={this.props.deletePicture}
              openModal={this.props.openModal}
            />
          );
        }
      }
    });

    const cleanCurrentUserNotFollowedPictures = dirtyCurrentUserNotFollowedPictures.filter((el) => el);
    setPictures(cleanCurrentUserNotFollowedPictures);
  }, [
    props.pictures,
    props.users,
    props.currentUser,
    props.deletePicture,
    props.openModal,
  ]);

  // Run unfollowed calculation every time pictures, users, or the current user changes.
  useEffect(() => {
    Object.keys(props.pictures).length > 0 && currentUserNotFollowed();
  }, [props.pictures, currentUserNotFollowed]);

  return (
    <div className='homepage-user-feed-gallery-container'>
      <NavbarContainer />
      <footer className='homepage-footer'>
        <p>Find me on these platforms!</p>
        <div className='homepage-footer-content-container'>
          <a href='https://www.linkedin.com/in/john-huang1/' className='LinkedIn-container'>
            <div className='LinkedIn-icon'>in</div>
            LinkedIn
          </a>
          <a href='https://wellfound.com/u/john-huang-21' className='wellfound-container'>
            <img className='angel-list-icon' src="https://img.icons8.com/windows/32/000000/angelist.png" />
            Wellfound
          </a>
          <a href='#' className='about-me-container'>
            <div className='about-me-icon' />
            About
          </a>
          <a href='https://github.com/john-huang-121' className='github-container'>
            <div className='github-icon' />
            Github
          </a>
        </div>
      </footer>
      {this.state.pictures}
      {this.props.modalOpen ? <ModalContainer picture={this.props.modalPicture} /> : null}
    </div>
  );
}

export default Discover;
