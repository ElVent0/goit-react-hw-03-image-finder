import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    console.log(this.props.dataArray);
    return (
      <>
        <ul className="gallery">
          {this.props.dataArray &&
            this.props.dataArray.map(item => {
              return (
                <ImageGalleryItem
                  key={item.id}
                  bigUrl={item.largeImageURL}
                  smallUrl={item.previewURL}
                  alt={item.tags.split()}
                />
              );
            })}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
