import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalStyled, ModalStyledContent } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onCloseModalByEsc();
      }
    });
  }

  async componentWillUnmount() {
    window.removeEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({ bigUrl: '' });
      }
    });
  }

  render() {
    return (
      <ModalStyled onClick={this.props.onCloseModal}>
        <ModalStyledContent>
          <img src={this.props.bigUrl} alt="" width="100%" />
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
