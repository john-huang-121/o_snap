import React from 'react';

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commenter_id: this.props.currentUser,
      picture_id: this.props.picture.id,
      body: ''
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
  }

  render() {
    return (
      <form className='new-comment-form' onSubmit={this.handleSubmit}>
        <textarea className='new-comment-box' onChange={this.handleInput('body')} placeholder='New comment...' />
        <input className='new-comment-submit' type='submit' value='Create Comment' />
      </form>
    );
  }
}

export default NewComment;