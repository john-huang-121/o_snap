import React from 'react';
import PictureIndexItem from './picture_index_item';
import PictureIndexUserItem from './picture_index_user_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: null,
    }

    this.currentUserFeed = this.currentUserFeed.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(this.props.users).length > 0) {
      this.currentUserFeed();
    }
  }

  //feed the followers into the component so it'll update simultaneously
  currentUserFeed() {
    let currentUserFollows = Object.entries(this.props.users[this.props.currentUser].follows);
    let userFollowedArr = [];
    let cleanCurrentUserFollowedPictures;
    let currentUserFollowed = currentUserFollows.forEach((follow) => {
      if (follow[1] === true) {
        userFollowedArr.push(Number(follow[0]));
      }
    });
    let dirtyCurrentUserFollowedPictures = Object.values(this.props.pictures).map((picture) => {
      if (userFollowedArr.includes(picture.user_id)) {
        if (picture.user_id === 1) {
          return (
            <PictureIndexItem key={picture.id} picture={picture}
            user={this.props.users[1]}
            deletePicture={this.props.deletePicture}
            />
          );
        }
        else if (picture.user_id == null) { //this line ensures that the recently uploaded pic gets shown
          return (
            <PictureIndexUserItem key={picture.id} picture={picture}
            user={this.props.users[this.props.currentUser]}
            deletePicture={this.props.deletePicture}
            />
          );
        }
        else {
          return (
            <PictureIndexUserItem key={picture.id} picture={picture}
            user={this.props.users[picture.user_id]}
            deletePicture={this.props.deletePicture}
            />
          );
        }
      }
      });
      
    cleanCurrentUserFollowedPictures = dirtyCurrentUserFollowedPictures.filter((el) => el);

    this.setState({ pictures: cleanCurrentUserFollowedPictures });
  }

  render() {
    return (
      <div className='homepage-user-feed-gallery-container'>
        {this.state.pictures}
      </div>
    );
  }
}

export default PictureIndex;
