import React from "react";
import NewCommentContainer from './new_comment_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };

    this.iterateComments = this.iterateComments.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props.picture)
  //   if (this.props.picture) {
  //     this.iterateComments();
  //   }
  // }

  iterateComments() {
    let pictureComments = null;

    if (this.props.picture) {
      pictureComments = Object.entries(this.props.picture.comments).map((comment) => {
        let commentPrimaryId = Number(comment[0]),
            userCommentEmail = this.props.users[Number(Object.keys(comment[1])[0])].email,
            userCommentBody = Object.values(comment[1])[0];
            
        return (
          <div className='each-posted-comment' key={commentPrimaryId}>
            <img className='picture-index-item-user-profile-pic' />
            <p>{userCommentEmail}</p>
            <p>{userCommentBody}</p>
          </div>
        )
      });
    }

    return pictureComments;
  }

  render() {
    return (
      <div className='comments-container' >
        {this.iterateComments()}
        <NewCommentContainer picture={this.props.picture} />
      </div> 
    );
  }
}

export default CommentIndex;