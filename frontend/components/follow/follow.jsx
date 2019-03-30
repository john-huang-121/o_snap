import React from 'react';

//Need to update all follow buttons when one is clicked

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowed: false,
      followedPrimaryId: null,
    };

    this.isFollowed = this.isFollowed.bind(this);
    this.checkIfEditor = this.checkIfEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.isFollowed();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.followers !== nextProps.followers) {
  //     console.log(this.props.followers, nextProps.followers);
  //     this.isFollowed();
  //   }
  // }

  isFollowed() {
    if (this.props.followers) {
      let followHash = this.props.followers;
      let allFollows = Object.keys(this.props.followers); //get keys from all followers

      allFollows.forEach((followPrimaryId) => {
        if ((followHash[followPrimaryId].user_id === this.props.user.id) && (followHash[followPrimaryId].follower_id === this.props.currentUser)) {
          this.setState({ isFollowed: true, followedPrimaryId: followPrimaryId });
        }
      });
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.isFollowed) {
      this.props.createFollow({ user_id: this.props.user.id, follower_id: this.props.currentUser })
      .then(() => {
        this.isFollowed();
      })
      .then(() => {
        window.location.reload(false);
      });
    } else {
      this.props.deleteFollow(this.state.followedPrimaryId)
      .then(() => {
        this.setState({ isFollowed: false , followedPrimaryId: null });
      })
      .then(() => {
        window.location.reload(false);
      });
    }
  }

  checkIfEditor() {
    let followButton;

    if (this.props.user === 1) { //if user is the editor
      if (this.state.isFollowed) {
        followButton = (<button className='profile-header-follow-user-button follow-clicked' onClick={this.handleClick}>- Unfollow</button>);
      } else {
        followButton = (<button className='profile-header-follow-user-button' onClick={this.handleClick}>+ Follow</button>);
      }
      
    } else {
      if (this.state.isFollowed) {
        followButton = (<button className='profile-header-follow-button follow-clicked' onClick={this.handleClick}>- Unfollow</button>);
      } else {
        followButton = (<button className='profile-header-follow-button' onClick={this.handleClick}>+ Follow</button>);
      }
    }

    return followButton;
  }

  render () {
    return (
      this.checkIfEditor()
    );
  }
}

export default Follow;