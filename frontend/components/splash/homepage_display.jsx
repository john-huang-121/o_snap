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

        <button className='home-display-signup-button'>
          Join Osnap
        </button>
      </div>
    );
  }
}

export default HomepageDisplay;
