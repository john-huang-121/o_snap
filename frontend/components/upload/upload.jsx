import React from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'; //not used

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUser,
      pictureFile: null,
      pictureUrl: null
    };


    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDrop = this.handleDrop.bind(this);
  }

  // componentDidMount() {
  //   let dropArea = document.getElementById("upload-container");

  //   function addHighlight(e) {
  //     dropArea.classList.add('highlight');
  //   }

  //   function removeHighlight(e) {
  //     dropArea.classList.remove('highlight');
  //   }
    
  //   function preventDefaults(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }

  //   dropArea.addEventListener('dragenter', addHighlight);
  //   dropArea.addEventListener("dragover", addHighlight);
  //   dropArea.addEventListener('dragleave', removeHighlight);
  //   dropArea.addEventListener('drop', removeHighlight);
  //   dropArea.addEventListener("drop", this.handleDrop);

  //   ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  //     dropArea.addEventListener(eventName, preventDefaults);
  //   });
  // }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  // handleDrop(e) {
  //   let dt = e.dataTransfer;
  //   let files = dt.files;
  //   this.setState({pictureFile: files});
  //   console.log(this.state);
  // }

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
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ pictureFile: file , pictureUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  
  render() {
    const preview = this.state.pictureUrl ? <img src={this.state.pictureUrl} /> : null;
    return (
      <div className="upload-container" id='upload-container'>
        <form className="upload-form-container" onSubmit={this.handleSubmit}>
          <label className="upload-form-label-title">
            Title
            <input type="text" className="upload-form-title" onChange={this.handleInput("title")} />
          </label>

          <label className="upload-form-label-description">
            description
            <input type="text" className="upload-form-description" onChange={this.handleInput("description")} />
          </label>

          <label className="upload-form-label-pictureUrl">
            pictureUrl
            <input type="file" className="upload-form-pictureUrl" onChange={this.handleFile} />
          </label>
          <h1>Image Preview</h1>
          {preview}
          <label className="upload-form-label-submit">
            <input type="submit" className="upload-form-" value="submit" />
          </label>
        </form>
      </div>
    );
  }
}

export default Upload;

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