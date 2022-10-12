import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalStyled, ModalStyledContent } from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <ModalStyled onClick={this.props.onCloseModal}>
        <ModalStyledContent>
          <img src={this.props.bigUrl} alt="" />
        </ModalStyledContent>
      </ModalStyled>
    );
  }
}

export default Modal;

Modal.propTypes = {
  bigUrl: PropTypes.string,
  onCloseModal: PropTypes.func,
};
