import React from 'react';
import { Link } from 'react-router-dom';
import SplashNavContainer from './splash_nav_container';
import NavbarContainer from '../navbar/navbar_container';
import FeedContainer from '../feed/feed_container';
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
    if (this.state.whichTab === 'people') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-people'>
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people1.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people2.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people3.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people4.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people5.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people6.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people7.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/people8.jpg'} />
        </div>
      )
    } else if (this.state.whichTab === 'landscapes') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-landscapes'>
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape1.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape2.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape3.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape4.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape5.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape6.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape7.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape8.jpg'} />
        </div>
      )
    } else if (this.state.whichTab === 'nature') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-nature'>
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature1.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature2.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature3.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature4.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature5.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature6.jpg'} />
          <img className='homepage-top-photos-grid-item-parrot' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/nature7.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/landscape4.jpg'} />
        </div>
      )
    } else if (this.state.whichTab === 'city') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-city'>
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city1.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city2.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city3.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city4.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city5.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city6.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city7.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/city8.jpg'} />
        </div>
      )
    } else if (this.state.whichTab === 'animals') {
      return (
        <div className='homepage-top-photos-grid-container' id='unlog-animals'>
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal1.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal2.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal3.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal4.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal5.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal6.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal7.jpg'} />
          <img className='homepage-top-photos-grid-item' src={'https://s3-us-west-1.amazonaws.com/osnap-dev/animal8.jpg'} />
        </div>
      )
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
