import React from 'react';
import PictureIndexItem from './picture_index_item';
import PictureIndexUserItem from './picture_index_user_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: null,
    }
    // this.checkFollowed = this.checkFollowed.bind(this);
    this.allPictures = this.allPictures.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.allPictures();
    }
  }

  allPictures() {
    let allPictures = Object.values(this.props.pictures).map(picture => {
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
    });

    this.setState({ pictures: allPictures });
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
