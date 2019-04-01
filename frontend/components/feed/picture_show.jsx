import React from 'react';

class PictureShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPicture(this.props.key);
  }

  render() {
    return (
      <div className='picture-show-container'>
        <img src={this.props.picture.pictureUrl} />
      </div>
    );
  }
}

export default PictureShow;
