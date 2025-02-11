import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

const Upload = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [pictureFile, setPictureFile] = useState(null);
  const [pictureUrl, setPictureUrl] = useState(null);

  const navigate = useNavigate();

  const handleInput = (type) => (e) => {
    if (type === 'tags') {
      setTags(e.target.value.split(' '));
    } else if (type === 'title') {
      setTitle(e.target.value);
    } else if (type === 'description') {
      setDescription(e.target.value);
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPictureFile(file);
        setPictureUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture[title]', title);
    formData.append('picture[description]', description);
    formData.append('picture[user_id]', props.currentUser);
    formData.append('picture[picture]', pictureFile);
    tags.forEach((tag) => {
      formData.append('picture[tags][]', tag);
    });
    props.uploadPicture(formData).then(() => navigate('/'));
  };

  const preview = pictureUrl ? <img src={pictureUrl} alt="Preview" /> : null;

  return (
    <div className="upload-container" id="upload-container">
      <NavbarContainer />
      <form className="upload-form-container" onSubmit={handleSubmit}>
        <label className="upload-form-label-title" htmlFor="upload-title">
          Title:
        </label>
        <input
          type="text"
          className="upload-form-title"
          id="upload-title"
          onChange={handleInput('title')}
        />
        <br />
        <label className="upload-form-label-description" htmlFor="upload-desc">
          Description:
        </label>
        <textarea
          className="upload-form-description"
          id="upload-desc"
          wrap="soft"
          onChange={handleInput('description')}
        />
        <br />
        <label className="upload-form-label-tags" htmlFor="upload-tags">
          Tags (space separated):
        </label>
        <input
          type="text"
          className="upload-form-tags"
          id="upload-tags"
          onChange={handleInput('tags')}
        />
        <br />
        <label className="upload-form-label-pictureUrl" htmlFor="upload-img">
          Image:
        </label>
        <input
          type="file"
          className="upload-form-pictureUrl"
          id="upload-img"
          onChange={handleFile}
        />
        {preview}
        <br />
        <label className="upload-form-label-submit">
          <input type="submit" className="upload-form" value="submit" />
        </label>
      </form>
    </div>
  );
};

export default Upload;
