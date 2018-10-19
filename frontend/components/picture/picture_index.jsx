import React from 'react';
import PictureIndexItem from './picture_index_item';
import PictureIndexUserItem from './picture_index_user_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPictures();
    this.props.fetchUsers();
  }

  render() {
    const pictures = this.props.pictures.map(picture => {
      if (picture.user_id === 1) {
        return (
          <PictureIndexItem key={picture.id} picture={picture}
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

    return (
      <div className='homepage-user-feed-gallery-container'>
        {pictures}
      </div>
    );
  }
}

export default PictureIndex;
