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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dynamicTextArea = this.dynamicTextArea.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    window.location.reload(false);
  }

  dynamicTextArea(event) {
    let textElement = event.currentTarget;

    textElement.style.height = '1px';
    textElement.style.height = (25 + textElement.scrollHeight) + 'px';
  }

  render() {
    return (
      <form className='new-comment-form' onSubmit={this.handleSubmit}>
        <textarea 
          className='new-comment-box'
          onChange={this.handleInput('body')}
          placeholder='New comment...'
          onKeyUp={e => this.dynamicTextArea(e)} />
        <input className='new-comment-submit' type='submit' value='Create Comment' />
      </form>
    );
  }
}

export default NewComment;