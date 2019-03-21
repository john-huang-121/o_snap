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

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.followers, this.props.followers);
    if (nextProps.followers !== this.props.followers) {
      // console.log(this.state.isFollowed);
      this.isFollowed(nextProps.followers);
    }
  }

  componentDidMount() {
    this.isFollowed();
    // console.log(this.props.user);
  }

  isFollowed(nextProps = null) {
    if (this.props.followers) {
      let followHash = this.props.followers;
      let allFollows = Object.keys(this.props.followers); //get keys from all followers

      if (nextProps !== null) {
        followHash = nextProps.followers;
        allFollows = Object.keys(nextProps.followers); //get keys from all followers
      }

      allFollows.forEach((followPrimaryId) => {
        if ((followHash[followPrimaryId].user_id === this.props.user.id) && (followHash[followPrimaryId].follower_id === this.props.currentUser)) {
          this.setState({ isFollowed: true, followedPrimaryId: followPrimaryId }, () => console.log('done'));
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
      });
    } else {
      this.props.deleteFollow(this.state.followedPrimaryId)
      .then(() => {
        this.setState({ isFollowed: false , followedPrimaryId: null });
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