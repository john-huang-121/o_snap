import React from 'react';
import { Link } from "react-router-dom";
import LikeContainer from '../like/like_container';
import CommentIndex from '../comment/comment_index_container';

const Timestamp = require("react-timestamp");

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let modalClass = this.props.modalOpen ? 'modal-open' : 'modal-closed';

    return (
      <div className={`${modalClass}`}>
        <section className='modal-window'>
          <div className='modal-picture'>
            <img src={this.props.picture.pictureUrl} />
          </div>
          <div className='modal-profile'>
            <div className='modal-author-info-container'>
              <div className='modal-author-info'>
                <div className='modal-author-icon'>
                  <img src={this.props.users[this.props.picture.user_id].profile_pic} />
                </div>
                <div className='modal-author-email-timestamp-container'>
                  <Link to={`/user/${this.props.picture.user_id}`}>{this.props.users[this.props.picture.user_id].email}</Link>
                  <Timestamp className='profile-gallery-timestamp'
                    time={this.props.picture.created_at} format='ago' />
                </div>
              </div>
              <div className="modal-close-button-container">
                <button className="modal-close-button" onClick={this.props.closeModal}>x</button>
              </div>
            </div>
            {/* <div href='#' className='picture-index-item-user-header-container'>
              <img className='picture-index-item-user-profile-pic' src={user.profile_pic} />
              <div className='picture-index-item-email-timestamp-container'>
              </div>
            </div> */}
            <div className='modal-description-and-icon-container'>
              <div className=''>
                {/* <h1>title</h1>
                <p>description</p> */}
                <div className='modal-title'>
                  {this.props.picture.title}
                </div>
                <p className='modal-desc'>
                  {this.props.picture.description}
                </p>
              </div>

              <div className='modal-icon-container'>
                <a href='#' className='modal-icons'>
                  <li className='picture-index-item-user-messenger-icon' />
                </a>

                <a href='#' className='modal-icons'>
                  <li className='picture-index-item-user-comment-icon' />
                </a>

                <a href='#' className='modal-icons'>
                  <li className='picture-index-item-user-gallery-icon' />
                </a>

                <a href='#' className='modal-icons'>
                  <li className='picture-index-item-user-gallery-icon' />
                </a>

                <LikeContainer picture={this.props.picture} />
              </div>
            </div>
          </div>

          <div className='modal-comment'>
            <CommentIndex picture={this.props.picture} />
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;

// https://alligator.io/react/modal-component/