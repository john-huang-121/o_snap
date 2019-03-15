import React from 'react';
import PictureIndexItem from './picture_index_item';
import PictureIndexUserItem from './picture_index_user_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // followers: this.props.followers,
      pictures: this.props.pictures,
      users: this.props.users
    };
    
    // this.checkFollowed = this.checkFollowed.bind(this);
    this.allPictures = this.allPictures.bind(this);
  }

  componentWillReceiveProps() {

  }

  allPictures() {
    // console.log(this.props, this.state);
    // let followers = Object.values(this.props.followers);
    let pictures = Object.values(this.props.pictures).map(picture => {
      if (picture.user_id === 1) {
        return (
          <PictureIndexItem key={picture.id} picture={picture}
            user={this.props.users[1]}
            deletePicture={this.props.deletePicture}
            createFollow={this.props.createFollow}
            deleteFollow={this.props.deleteFollow} />
        );
      }
      else if (picture.user_id == null) {
        return (
          <PictureIndexUserItem key={picture.id} picture={picture}
            user={this.props.users[this.props.currentUser]}
            deletePicture={this.props.deletePicture}
            createFollow={this.props.createFollow}
            deleteFollow={this.props.deleteFollow} />
        );
      }
      else {
        return (
          <PictureIndexUserItem key={picture.id} picture={picture}
            user={this.props.users[picture.user_id]}
            deletePicture={this.props.deletePicture}
            createFollow={this.props.createFollow}
            deleteFollow={this.props.deleteFollow} />
        );
      }
    });

    return pictures;
  }

  render() {
    // console.log(this.props, this.state);
    return (
      <div className='homepage-user-feed-gallery-container'>
        {this.allPictures()}
      </div>
    );
  }
}

export default PictureIndex;
