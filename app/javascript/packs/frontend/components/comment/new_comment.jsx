import React, { useState } from 'react';
import NewCommentContainer from './new_comment_container';
import { Link } from 'react-router-dom';

const NewComment = ({ currentUser, picture, createComment }) => {
  const [commentBody, setCommentBody] = useState('');

  const handleInput = (e) => {
    setCommentBody(e.currentTarget.value);
  }

  const dynamicTextArea = (e) => {
    const textElement = e.currentTarget;

    textElement.style.height = '1px';
    textElement.style.height = (25 + textElement.scrollHeight) + 'px';
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the comment data.
    const commentData = {
      commenter_id: currentUser,
      picture_id: picture.id,
      body: commentBody,
    };

    // Create the comment and then reload the page.
    createComment(commentData);
    window.location.reload(false);
  };

  return (
    <form className='new-comment-form' onSubmit={handleSubmit}>
      <textarea
        className='new-comment-box'
        value={commentBody}
        onChange={handleInput}
        placeholder='New comment...'
        onKeyUp={dynamicTextArea}
      />
      <input className='new-comment-submit' type='submit' value='Create Comment' />
    </form>
  );
};

export default NewComment;