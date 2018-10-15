import React from 'react';
import { Link } from 'react-router-dom';

class HomepageDisplay extends React.Component {


  render () {
    return (
      <div className='homepage-display-container'>

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
    );
  }
}

export default HomepageDisplay;
