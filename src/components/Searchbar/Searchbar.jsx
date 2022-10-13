import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarStyled,
  FormStyled,
  FormButtonStyled,
  FormButtonLabelStyled,
  FormInputStyled,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    temporaryWord: '',
  };

  handleChange = e => {
    this.setState({
      temporaryWord: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    this.props.onSubmit(this.state.temporaryWord);
    this.setState({ temporaryWord: '' });
    e.currentTarget.reset();
  };

  render() {
    return (
      <SearchBarStyled>
        <FormStyled onSubmit={this.handleSubmit}>
          <FormButtonStyled type="submit">
            <FormButtonLabelStyled>Search</FormButtonLabelStyled>
          </FormButtonStyled>

          <FormInputStyled
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.temporaryWord}
          />
        </FormStyled>
      </SearchBarStyled>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
