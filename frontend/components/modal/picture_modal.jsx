import React from 'react';
import LikeContainer from '../like/like_container';
import CommentIndex from '../comment/comment_index_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let modalClass = this.props.modalOpen ? 'modal-open' : 'modal-closed';

    return (
      <div>
      <h1>React Modal</h1>
      <button onClick={this.props.openModal}>open</button>
      <div className={`${modalClass}`}>
        <section className='modal-window'>
          <div className='modal-picture'>
            <img src={this.props.picture.pictureUrl} />
          </div>
          <div className='modal-profile'>
            <div className='modal-author-info-container'>
              <div className='modal-author-info'>
                <img className='modal-author-icon' src="" />
                <div className='modal-author-email-timestamp-container'>
                  <h1>Emma</h1>
                  <h2>2hr ago</h2> 
                </div>
              </div>
              <button onClick={this.props.closeModal}>close</button>
            </div>
            {/* <div href='#' className='picture-index-item-user-header-container'>
              <img className='picture-index-item-user-profile-pic' src={user.profile_pic} />
              <div className='picture-index-item-email-timestamp-container'>
                <Link to={`/user/${user.id}`}>{user.email}</Link>
                <Timestamp className='profile-gallery-timestamp'
                  time={picture.created_at} format='ago' />
              </div>
            </div> */}
            <div className='modal-description-and-icon-container'>
              <div className=''>
                {/* <h1>title</h1>
                <p>description</p> */}
                <div className='modal-title'>
                  {this.props.picture.title}
                </div>
                <div className='modal-desc'>
                  {this.props.picture.description}
                </div>
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
    </div>
    );
  }
}

export default Modal;

// https://alligator.io/react/modal-component/