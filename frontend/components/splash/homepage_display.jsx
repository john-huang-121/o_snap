import React from 'react';
import { Link } from 'react-router-dom';
import SplashNavContainer from './splash_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import PictureIndexContainer from '../picture/picture_index_container';


class HomepageDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPictures();
  }

  isLoggedIn() {
    if (this.props.session === null) {
      const notLogged = (
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
        <div className='homepage-top-photos'>
        {/* this is for grid pictures that might need masonry */}
        </div>
        <div className='homepage-get-motivated-to-share'>
        {/* this is for the become a part of the community */}
        </div>
        <footer className='homepage-footer'>
        {/* for the bottom of the page */}
        </footer>
      );
      return notLogged;

    } else {
      const logged = (
        <div className='main-feed'>
          <NavbarContainer />
          <PictureIndexContainer users={this.props.users}
            pictures={this.props.pictures}/>
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
