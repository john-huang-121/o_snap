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
    // debugger;
    const pictures = this.props.pictures.map(picture => {
          return (
            <PictureIndexItem key={picture.id} picture={picture}
              deletePicture={this.props.deletePicture} />
          );
        });

    return (
      <div>
        <ul className='Picture-index-items-container'>
          {pictures}
        </ul>
      </div>
    );
  }
}

export default PictureIndex;
