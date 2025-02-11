import React from 'react';
import { Link } from "react-router-dom";
import LikeContainer from '../like/like_container';
import CommentIndex from '../comment/comment_index_container';

const Timestamp = require("react-timestamp");

const Modal = ({ modalOpen, closeModal, picture, users }) => {
  let modalClass = modalOpen ? 'modal-open' : 'modal-closed';

  return (
    <div className={`${modalClass}`}>
      <section className='modal-window'>
        <div className='modal-picture'>
          <img src={picture.pictureUrl} />
        </div>
        <div className='modal-profile'>
          <div className='modal-author-info-container'>
            <div className='modal-author-info'>
              <div className='modal-author-icon'>
                <img src={users[picture.user_id].profile_pic} />
              </div>
              <div className='modal-author-email-timestamp-container'>
                <Link to={`/user/${picture.user_id}`}>{users[picture.user_id].email}</Link>
                <Timestamp className='profile-gallery-timestamp'
                  time={picture.created_at} format='ago' />
              </div>
            </div>
            <div className="modal-close-button-container">
              <button className="modal-close-button" onClick={closeModal}>x</button>
            </div>
          </div>
          <div className='modal-description-and-icon-container'>
            <div className=''>
              <div className='modal-title'>
                {picture.title}
              </div>
              <p className='modal-desc'>
                {picture.description}
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
              <LikeContainer picture={picture} />
            </div>
          </div>
        </div>
        <div className='modal-comment'>
          <CommentIndex picture={picture} />
        </div>
      </section>
    </div>
  );
}

export default Modal;