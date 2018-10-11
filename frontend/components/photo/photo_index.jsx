import React from 'react';
import PhotoIndexItem from './post_index_item';

class PhotoIndex extends React.Component {

  componentDidMount() {
    this.props.retrievePhotos();
  }

// deletePhoto=this.props.deletePhoto
  render() {
    const photos = this.props.photos.map(photo => {
      return (
        <PostIndexItem
          key={photo.id}
          photo={photo}
         />
      );
    });

    return (
      <div>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
