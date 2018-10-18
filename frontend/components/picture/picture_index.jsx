import React from 'react';
import PictureIndexItem from './picture_index_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pictures;
  }

  componentDidMount() {
    this.props.fetchPictures();
  }

  render() {
    const pictures = this.props.pictures.map(picture => {
          return (
            <PictureIndexItem key={picture.id} picture={picture}
              deletePicture={this.props.deletePicture} />
          );
        });

    return (
      <div className='homepage-user-feed-gallery-container'>
        {pictures}
      </div>
    );
  }
}

export default PictureIndex;
