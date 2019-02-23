import React from 'react';
import PictureIndexItem from './picture_index_item';
import PictureIndexUserItem from './picture_index_user_item';

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchFollows();
  }

  render() {
      const pictures = Object.values(this.props.pictures).map(picture => {
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
    return (
      <div className='homepage-user-feed-gallery-container'>
        {pictures}
      </div>
    );
  }
}

export default PictureIndex;
