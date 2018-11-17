import React from 'react';
import PictureIndexItem from './picture_index_item';
import PictureIndexUserItem from './picture_index_user_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const pictures = Object.values(this.props.pictures).map(picture => {
        console.log(picture.user_id);
        if (picture.user_id === 1) {
          return (
            <PictureIndexItem key={picture.id} picture={picture}
              deletePicture={this.props.deletePicture} />
          );
        } else if (picture.user_id == null) {
          debugger;
          return (
            <PictureIndexUserItem key={picture.id} picture={picture}
              user={this.props.users[this.props.currentUser]}
              deletePicture={this.props.deletePicture} />
          );
        } else {
          return (
            <PictureIndexUserItem key={picture.id} picture={picture}
              user={this.props.users[picture.user_id]}
              deletePicture={this.props.deletePicture} />
          );
        }
      });
      // debugger;
    return (
      <div className='homepage-user-feed-gallery-container'>
        {pictures}
      </div>
    );
  }
}

export default PictureIndex;
