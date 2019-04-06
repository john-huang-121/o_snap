import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      likes: 0,
      
    };

    this.handleLike = this.handleLike.bind(this);
    this.checkLiked = this.checkLiked.bind(this);
    this.likeCount = this.likeCount.bind(this);
    this.likeButtonToRender = this.likeButtonToRender.bind(this);
  }

  componentDidMount() {
    this.checkLiked();
  }

  handleLike(e) {
    let pictureLikes = this.state.likes;
    
    e.preventDefault();

    if (!this.state.isLiked) {
      this.props.createLike({picture_id: this.props.picture.id, liker_id: this.props.currentUser})
        .then(() => { this.setState({isLiked: true, likes: (pictureLikes + 1) })})
        .then(() => this.props.fetchPictures())
    } else {
      this.props.deleteLike(this.props.pictures[this.props.picture.id].likes[this.props.currentUser])
        .then(() => { this.setState({isLiked: false, likes: (pictureLikes - 1) })})
    }
  }

  likeCount() {
    let likeCount;

    if (this.props.picture.likes) {
      likeCount = Object.keys(this.props.picture.likes).length;
    } else {
      likeCount = 0;
    }

    this.setState({ likes: likeCount });
  }

  checkLiked() {
    if (this.props.picture.likes === null || this.props.picture.likes === undefined) {
      this.setState({ isLiked: false });
    } else if (Object.keys(this.props.picture.likes).includes(String(this.props.currentUser))) {
      this.setState({ isLiked: true });
    }
  }

  likeButtonToRender() {
    if (this.state.isLiked) {
      return (
        <button className='picture-index-item-user-liked' onClick={this.handleLike}>
          <ul className='picture-index-item-user-like-icon'>
            <li className='picture-index-item-user-like-icon-number'>{this.state.likes}</li>
          </ul>
        </button>
      )
    } else {
      return (
        <button className='picture-index-item-user-like' onClick={this.handleLike}>
          <ul className='picture-index-item-user-like-icon'>
            <li className='picture-index-item-user-like-icon-number'>{this.state.likes}</li>
          </ul>
        </button>
      )
    }
  }

  render() {
    return (
      (this.likeButtonToRender())
    );
  }
}

export default Like;