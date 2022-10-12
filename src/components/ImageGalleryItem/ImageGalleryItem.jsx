import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GallaryItemStyled,
  GallaryItemImageStyled,
} from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    return (
      <GallaryItemStyled
        onClick={() => {
          this.props.onOpenModal(this.props.bigUrl);
        }}
      >
        <GallaryItemImageStyled
          src={this.props.smallUrl}
          alt={this.props.alt}
          width="200"
        />
      </GallaryItemStyled>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string,
  bigUrl: PropTypes.string,
  onOpenModal: PropTypes.func,
};
