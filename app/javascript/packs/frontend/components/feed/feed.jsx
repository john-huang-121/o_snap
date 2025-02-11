import React from 'react';
import FeedItem from './feed_item';
import FeedUserItem from './feed_user_item';
import ModalContainer from "../modal/picture_modal_container";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: null,
    }

    this.currentUserFeed = this.currentUserFeed.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(this.props.users).length > 0 && this.props.users[this.props.currentUser]) {
      this.currentUserFeed();
    } else {
      this.setState({ pictures: <p>Loading</p>})
    }
  }

  //feed the followers into the component so it'll update simultaneously
  currentUserFeed() {
    let currentUserFollows = Object.entries(this.props.users[this.props.currentUser].follows);
    let userFollowedArr = [];
    let cleanCurrentUserFollowedPictures;
    currentUserFollows.forEach((follow) => {
      if (follow[1] === true) {
        userFollowedArr.push(Number(follow[0]));
      }
    });
    let dirtyCurrentUserFollowedPictures = Object.values(this.props.pictures).map((picture) => {
      if (userFollowedArr.includes(picture.user_id)) {
        if (picture.user_id === 1) {
          return (
            <FeedItem key={picture.id} picture={picture}
            user={this.props.users[1]}
            deletePicture={this.props.deletePicture}
            openModal={this.props.openModal}
            />
          );
        }
        else if (picture.user_id == null) { //this line ensures that the recently uploaded pic gets shown
          return (
            <FeedUserItem key={picture.id} picture={picture}
            user={this.props.users[this.props.currentUser]}
            deletePicture={this.props.deletePicture}
            openModal={this.props.openModal}
            />
          );
        }
        else {
          return (
            <FeedUserItem key={picture.id} picture={picture}
            user={this.props.users[picture.user_id]}
            deletePicture={this.props.deletePicture}
            openModal={this.props.openModal}
            />
          );
        }
      }
      });

      cleanCurrentUserFollowedPictures = dirtyCurrentUserFollowedPictures.filter((el) => el);
    
    if (cleanCurrentUserFollowedPictures.length === 0) {
      this.setState({ pictures: <p>No One Followed. Go find new people to follow in Discover!</p> });
    } else {
      
      this.setState({ pictures: cleanCurrentUserFollowedPictures });
    }
  }

  render() {
    return (
      <div className='homepage-user-feed-gallery-container'>
        {this.state.pictures}
        {this.props.modalOpen ? <ModalContainer picture={this.props.modalPicture} /> : null }
      </div>
    );
  }
}

export default Feed;
