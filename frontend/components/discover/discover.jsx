import React from 'react';
// importing FeedItems and FeedUserItems as discover
import DiscoverItem from "../feed/feed_item";
import DiscoverUserItem from "../feed/feed_user_item";
import NavbarContainer from "../navbar/navbar_container";

class Discover extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pictures: null,
      }

      this.currentUserNotFollowed = this.currentUserNotFollowed.bind(this);
    }

    componentDidMount() {
      this.props.fetchUsers();
      this.props.fetchPictures();
    }

    componentWillReceiveProps(nextProps) {
      if (Object.keys(this.props.pictures).length > 0) {
        this.currentUserNotFollowed();
      }
    }

    //feed the followers into the component so it'll update simultaneously
    currentUserNotFollowed() {
      let currentUserFollows = Object.entries(this.props.users[this.props.currentUser].follows);
      let userNotFollowedArr = [];
      let cleanCurrentUserNotFollowedPictures;
      let dirtyCurrentUserNotFollowedPictures;
      //only returns the unfollowed users
      currentUserFollows.forEach((follow) => {
        if (follow[1] === false) {
          userNotFollowedArr.push(Number(follow[0]));
        }
      });
      dirtyCurrentUserNotFollowedPictures = Object.values(this.props.pictures).map((picture) => {
        if (userNotFollowedArr.includes(picture.user_id)) {
          if (picture.user_id === 1) {
            return (
              <DiscoverItem key={picture.id} picture={picture}
                user={this.props.users[1]}
                deletePicture={this.props.deletePicture}
              />
            );
          }
          else if (picture.user_id == null) { //this line ensures that the recently uploaded pic gets shown
            return (
              <DiscoverUserItem key={picture.id} picture={picture}
                user={this.props.users[this.props.currentUser]}
                deletePicture={this.props.deletePicture}
              />
            );
          }
          else {
            return (
              <DiscoverUserItem key={picture.id} picture={picture}
                user={this.props.users[picture.user_id]}
                deletePicture={this.props.deletePicture}
              />
            );
          }
        }
      });

      cleanCurrentUserNotFollowedPictures = dirtyCurrentUserNotFollowedPictures.filter((el) => el);

      this.setState({ pictures: cleanCurrentUserNotFollowedPictures });
    }

    render() {
      return (
        <div className='homepage-user-feed-gallery-container'>
          <NavbarContainer />
          <footer className='homepage-footer'>
            <p>Find me on these platforms!</p>
            <div className='homepage-footer-content-container'>
              <a href='https://www.linkedin.com/in/john-huang1/' className='LinkedIn-container'>
                <div className='LinkedIn-icon'>in</div>
                LinkedIn
              </a>
              <a href='https://angel.co/john-huang-21?public_profile=1' className='angel-list-container'>
                <img className='angel-list-icon' src="https://img.icons8.com/windows/32/000000/angelist.png" />
                AngelList
              </a>
              <a href='#' className='about-me-container'>
                <div className='about-me-icon' />
                About
              </a>
              <a href='https://github.com/john-huang-121' className='github-container'>
                <div className='github-icon' />
                Github
              </a>
            </div>
          </footer>
          {this.state.pictures}
        </div>
      );
    }
  }

export default Discover;
