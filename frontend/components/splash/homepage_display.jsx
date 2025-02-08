import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SplashNavContainer from './splash_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import FeedContainer from '../feed/feed_container';
import HomepageTileGallery from './homepage_tile_gallery';
import Footer from '../footer/footer';

const HomepageDisplay = (props) => {
  const [whichTab, setWhichTab] = useState('people');

  useEffect(() => {
    props.fetchUsers();
    props.fetchPictures();
    props.fetchFollows();
    props.fetchLikes();
  }, [
    props.fetchUsers,
    props.fetchPictures,
    props.fetchFollows,
    props.fetchLikes,
  ]);

  const topPhotosClick = () => {
    return <HomepageTileGallery whichTab={whichTab} />;
  };

  const handleClick = (type) => (e) => {
    setWhichTab(type);
  };

  const renderNotLogged = () => {
    return (
      <div className="homepage-container">
        <div className="homepage-display-container">
          <SplashNavContainer />
          <ul className="home-display-opening-text">
            Get inspired and share your best photos
          </ul>
          <ul className="home-display-following-text">
            Find your home among the world's best photographers.
          </ul>
          <Link className="home-display-signup-button" to="/signup">
            Join Osnap
          </Link>
        </div>
        <div className="homepage-top-photos-container">
          <div className="homepage-top-photos-header">
            <h1>The top photos, chosen by you</h1>
            <p>
              Discover what's trending according to photographers around the world.
            </p>
          </div>
          <ul className="homepage-top-photos-header-list">
            <button onClick={handleClick('people')}>People</button>
            <button onClick={handleClick('landscapes')}>Landscapes</button>
            <button onClick={handleClick('nature')}>Nature</button>
            <button onClick={handleClick('city')}>City</button>
            <button onClick={handleClick('animals')}>Animals</button>
          </ul>
        </div>
        {Object.keys(props.pictures).length > 0 ? topPhotosClick() : null}
      </div>
    );
  };

  const renderLogged = () => {
    return (
      <div className="main-feed">
        <NavbarContainer />
        <FeedContainer />
      </div>
    );
  };

  return (
    <div>
      {props.session === null ? renderNotLogged() : renderLogged()}
      <Footer />
    </div>
  );
};

export default HomepageDisplay;