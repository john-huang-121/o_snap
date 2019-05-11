# README

OSnap is an attempt at cloning a pixel perfect version of the high-quality photosharing website, 500Px. Here at Osnap, users are able to make an account, share high resolution pictures they've taken on the site, and see a feed of recent content other users have posted. Below is the live site:

http://o-snap.herokuapp.com/#/


## Technologies:

- ruby '2.5.1'
- Rails backend, version '5.2.1'
- Postgresql for the database
- React-redux for the frontend
- AJAX for fulfilling requests
- VanillaDOM for setting up the root element
- Amazon Web Service for image storage


## Key Features

### Beautiful splash page
- Styled close to pixel perfection
![Splash Page](https://github.com/john-huang-121/o_snap/blob/master/app/assets/images/OSnap.jpg "Splash Page")

### Authenticity
- Account creation is seamless
- Errors clear upon page refresh
- Demo login to a test user account to further explore the site

![Signup Page](https://github.com/john-huang-121/o_snap/blob/master/app/assets/images/OSnap2.jpg "Signup Page")

### Upload pictures to the cloud
- Images are stored in the cloud
- Accessible anywhere in the world

### View user feed anywhere in the world
- See updates from your favorite photographers

## Highlight Code Snippets

#### Selective rendering of the nav bar depending on the current page and whether the user is logged in
````
  currentPageState () {
    if (this.props.isSignup) {
      const signup = (
        <li className='nav-flex-login'>
          <Link className='nav-btn' id='login' to='/login'>Log In</Link>
        </li>
      );
      return signup;
    } else if (this.props.isLogin) {
      const login = (
        <li className='nav-flex-signup'>
          <Link className='nav-btn' id='signup' to='/signup'>Sign Up</Link>
        </li>
      );
      return login;
    } else if (this.props.isSplash && this.props.currentUserId === 'null') {
      const splash = (
        <ul className='nav-flex-login-signup-container'>
          <li className='nav-flex-login'>
            <Link className='nav-btn' id='login' to='/login'>Log In</Link>
          </li>

          <li className='nav-flex-signup'>
            <Link className='nav-btn' id='signup' to='/signup'>Sign Up</Link>
          </li>
        </ul>
      );
      return splash;

    } else if (this.props.isSplash && this.props.currentUserId !== 'null') {
      const userNav = (
````

#### Selective Rendering of Editor's pictures and Regular User Accounts
````
      const pictures = Object.values(this.props.pictures).map(picture => {
        if (picture.user_id === 1) {
          return (
            <PictureIndexItem key={picture.id} picture={picture}
              deletePicture={this.props.deletePicture} />
          );
        } else {
          return (
            <PictureIndexUserItem key={picture.id} picture={picture}
              user={this.props.users[picture.user_id]}
              deletePicture={this.props.deletePicture} />
          );
        }
      });
````
