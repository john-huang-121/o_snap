import React from 'react';

class Follow extends React.Component {
  constructor(props) {
    super(props);

    this.checkIfEditor = this.checkIfEditor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log({
      user_id: this.props.user.id,
      follower_id: this.props.currentUser
    });
    this.props.createFollow({ user_id: this.props.user.id, follower_id: this.props.currentUser })
    .then(() => this.props.history.push('/'));
  }

  checkIfEditor() {
    if (this.props.user === 1) { //if user is the editor
      return (
        <button className='profile-header-follow-user-button' onClick={this.handleClick}>+ Follow</button>
      );
    } else {
      return (
        <button className='profile-header-follow-button' onClick={this.handleClick}>+ Follow</button>
      );
    }
  }

  render () {
    return(
      this.checkIfEditor()
    );
  }
}

export default Follow;