import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { GallaryStyled } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    return (
      <>
        <GallaryStyled>
          {this.props.dataArray &&
            this.props.dataArray.map(item => {
              return (
                <ImageGalleryItem
                  key={item.id}
                  bigUrl={item.largeImageURL}
                  smallUrl={item.previewURL}
                  alt={item.tags.split()}
                  onOpenModal={this.props.onOpenModal}
                />
              );
            })}
        </GallaryStyled>
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  dataArray: PropTypes.array,
  onOpenModal: PropTypes.func,
};
