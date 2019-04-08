import React from "react";
import NewCommentContainer from './new_comment_container';
const Timestamp = require("react-timestamp");

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };

    this.iterateComments = this.iterateComments.bind(this);
  }

  iterateComments() {
    let pictureComments;

    pictureComments = Object.entries(this.props.picture.comments).map((comment) => {
      let commentPrimaryId = Number(comment[0]),
          commentCreationTime = comment[1].created_at,
          userCommentEmail = this.props.users[comment[1].commenter_id].email,
          userCommentBody = comment[1].body;

      return (
        <div className='each-posted-comment-container' key={commentPrimaryId}>
          <div className='comment-user-info-container'>
            <img className='picture-index-item-user-profile-pic' />
              <div className='comment-user-info'>
                <p>{userCommentEmail}</p>
                <Timestamp className='profile-gallery-timestamp'
                  time={commentCreationTime} format='ago' />
              </div>
          </div>
          <p className='comment-body'>{userCommentBody}</p>
        </div>
      )
    });

    return pictureComments;
  }

  render() {
    return (
      <div className='comments-container' >
        {this.props.picture.comments ? this.iterateComments() : null }
        <NewCommentContainer picture={this.props.picture} />
      </div> 
    );
  }
}

export default CommentIndex;