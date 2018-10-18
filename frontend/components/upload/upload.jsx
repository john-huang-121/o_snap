import React from 'react';
import { Link } from 'react-router-dom';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUser,
      pictureFile: null,
    };


    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture[title]', this.state.title);
    formData.append('picture[description]', this.state.description);
    formData.append('picture[user_id]', this.state.user_id);
    formData.append('picture[picture]', this.state.pictureFile);
    this.props.uploadPicture(formData)
      .then(() => this.props.history.push('/'));
  }

  handleFile(e) {
    this.setState({pictureFile: e.target.files[0]});
  }

  // renderErrors() {
  //   if (this.props.errors) {
  //     return (
  //       <ul className='upload-errors-container'>
  //         {this.props.errors.map((error) => (
  //           <li className='upload-error' key={error.id}>{error}</li>)
  //         )}
  //       </ul>
  //     );
  //   }
  // }

  render() {
    return (
      <div className='upload-container'>
        <form className='upload-form-container' onSubmit={this.handleSubmit}>
          <label className='upload-form-label-title'>Title
            <input type='text' className='upload-form-title'
              onChange={this.handleInput('title')} />
          </label>

          <label className='upload-form-label-description'>description
            <input type='text' className='upload-form-description'
              onChange={this.handleInput('description')} />
          </label>

          <label className='upload-form-label-pictureUrl'>pictureUrl
            <input type='file' className='upload-form-pictureUrl'
              onChange={this.handleFile}/>
          </label>

          <label className='upload-form-label-submit'>
            <input type='submit' className='upload-form-' value='submit' />
          </label>
        </form>
      </div>
    );
  }
}

export default Upload;
