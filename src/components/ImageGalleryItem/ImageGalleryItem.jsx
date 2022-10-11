import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.smallUrl} alt={this.props.alt} width="200" />
      </li>
    );
  }
}

export default ImageGalleryItem;
