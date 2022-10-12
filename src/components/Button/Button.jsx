import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

class Button extends Component {
  onLoadMore() {}
  render() {
    return (
      <ButtonStyled type="button" onClick={this.props.onLoadMore}>
        Load more
      </ButtonStyled>
    );
  }
}

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
