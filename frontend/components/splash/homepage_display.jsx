import React from 'react';
import { Link } from 'react-router-dom';
import SplashNavContainer from './splash_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import FeedContainer from '../feed/feed_container';


class HomepageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichTab: 'people'
    }

    this.topPhotosClick = this.topPhotosClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
    this.props.fetchPictures();
    this.props.fetchFollows();
    this.props.fetchLikes();
  }

  topPhotosClick() {
    if (this.state.whichTab === 'people') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-people'>
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[1].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[2].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[3].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[4].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[5].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[6].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[7].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[17].pictureUrl} />
        </div>
      );
    } else if (this.state.whichTab === 'landscapes') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-landscapes'>
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[10].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[26].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[28].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[29].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[31].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[35].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[36].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[37].pictureUrl} />
        </div>
      );
    } else if (this.state.whichTab === 'nature') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-nature'>
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[8].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[9].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[10].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[12].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[13].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[15].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[33].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[19].pictureUrl} />
        </div>
      );
    } else if (this.state.whichTab === 'city') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-city'>
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[11].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[14].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[21].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[27].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[28].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[34].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[45].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[47].pictureUrl} />
        </div>
      );
    } else if (this.state.whichTab === 'animals') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-animals'>
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[9].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[16].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[19].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[22].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[23].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[24].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[25].pictureUrl} />
          <img className='homepage-top-photos-grid-item' src={this.props.pictures[30].pictureUrl} />
        </div>
      );
    }
  }

  handleClick(type) {
    return (e) => {
      this.setState({ whichTab: type });
    };
  }

  isLoggedIn() {
    if (this.props.session === null) {
      const notLogged = (
        <div className='homepage-container'>
          <div className='homepage-display-container'>
            <SplashNavContainer />
            <ul className='home-display-opening-text'>
              Get inspired and share your best photos
            </ul>

            <ul className='home-display-following-text'>
              Find your home among the world's best photographers.
            </ul>

            <Link className='home-display-signup-button'
              to='/signup'>Join Osnap
            </Link>
          </div>
          <div className='homepage-top-photos-container'>
            <div className='homepage-top-photos-header'>
              <h1>The top photos, chosen by you</h1>
              <p>Discover what's trending according to photographers around the world.</p>
            </div>
            <ul className='homepage-top-photos-header-list'>
              <button onClick={this.handleClick('people')}>People</button>
              <button onClick={this.handleClick('landscapes')}>Landscapes</button>
              <button onClick={this.handleClick('nature')}>Nature</button>
              <button onClick={this.handleClick('city')}>City</button>
              <button onClick={this.handleClick('animals')}>Animals</button>
            </ul>
          </div>
          {Object.keys(this.props.pictures).length > 0 ? this.topPhotosClick() : null}
          <div className='homepage-get-motivated-to-share'>
          {/* this is for the become a part of the community */}
          </div>
          <footer className='homepage-footer'>
          {/* for the bottom of the page */}
          </footer>
        </div>
      );
      return notLogged;

    } else {
      const logged = (
        <div className='main-feed'>
          <NavbarContainer />
          <FeedContainer />
        </div>
      );
      return logged;

    }
  }

  render () {
    return (
      <div>
        {this.isLoggedIn()};
      </div>
    );
  }
}

export default HomepageDisplay;
