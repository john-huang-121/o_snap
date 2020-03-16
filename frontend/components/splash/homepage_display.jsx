import React from 'react';
import { Link } from 'react-router-dom';
import SplashNavContainer from './splash_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import FeedContainer from '../feed/feed_container';
import HomepageTileGallery from './homepage_tile_gallery';
import Footer from '../footer/footer';


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
    return <HomepageTileGallery whichTab={this.state.whichTab} />
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
        </div>
      )
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
        {this.isLoggedIn()}
        <Footer />
      </div>
    )
  }
}

export default HomepageDisplay;
