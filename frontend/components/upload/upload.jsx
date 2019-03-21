import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'; //not used

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUser,
      tags: [],
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
    if (type === 'tags') {
      return (e) => {
        this.setState({ [type]: e.target.value.split(' ') });
      };
    } else {
      return (e) => {
        this.setState({[type]: e.target.value});
      };
    }
  }

  // handleDrop(e) {
  //   let dt = e.dataTransfer;
  //   let files = dt.files;
  //   this.setState({pictureFile: files}); s
  //   console.log(this.state);
  // }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    let { title, description, user_id, pictureFile, tags } = this.state;

    formData.append('picture[title]', title);
    formData.append('picture[description]', description);
    formData.append('picture[user_id]', user_id);
    formData.append('picture[picture]', pictureFile);
    for (let i = 0; i < tags.length; i++) {
      formData.append('picture[tags][]', tags[i]);
    }
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
        <NavbarContainer />
        <form className="upload-form-container" onSubmit={this.handleSubmit}>
          <label className="upload-form-label-title" htmlFor="upload-title">
            Title:
          </label>
          <input type="text" className="upload-form-title" id="upload-title" onChange={this.handleInput("title")} />
          <br></br>
          <label className="upload-form-label-description" htmlFor="upload-desc">
            Description:
          </label>
          <textarea 
            className="upload-form-description"
            id="upload-desc"
            wrap="soft"
            onChange={this.handleInput("description")} />
          <br></br>
          <label className="upload-form-label-tags" htmlFor="upload-tags">
            Tags (space separated):
          </label>
          <input type="text" className="upload-form-tags" id="upload-tags" onChange={this.handleInput("tags")} />
          <br></br>
          <label className="upload-form-label-pictureUrl" htmlFor="upload-img">
            Image:
          </label>
          <input type="file" className="upload-form-pictureUrl" id="upload-img" onChange={this.handleFile} />
          {preview}
          <br></br>
          <label className="upload-form-label-submit">
            <input type="submit" className="upload-form" value="submit" />
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