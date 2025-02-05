import React from "react";
import { Link } from 'react-router-dom';
import NewCommentContainer from './new_comment_container';

const CommentIndex = ({ picture, users }) => {
  // Function to iterate over the comments and return JSX for each
  const iterateComments = () => {
    if (!picture.comments) return null;

    return Object.entries(picture.comments).map(([id, comment]) => {
      const commentPrimaryId = Number(id);
      // const commentCreationTime = comment.created_at; // if needed
      const userId = comment.commenter_id;
      const userProfilePic = users[userId].profile_pic;
      const userCommentEmail = users[userId].email;
      const userCommentBody = comment.body;

      return (
        <div className="each-posted-comment-container" key={commentPrimaryId}>
          <div className="comment-user-info-container">
            <img
              className="picture-index-item-user-profile-pic"
              src={userProfilePic}
              alt="User Profile"
            />
          </div>
          <p className="comment-body">
            <Link to={`/user/${userId}`}>{userCommentEmail}</Link>
            {userCommentBody}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="comments-container">
      {picture.comments ? iterateComments() : null}
      <NewCommentContainer picture={picture} />
    </div>
  );
};

export default CommentIndex;