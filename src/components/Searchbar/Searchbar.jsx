import React, { Component } from 'react';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
