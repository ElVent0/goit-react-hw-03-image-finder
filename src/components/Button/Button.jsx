import React, { Component } from 'react';

class Button extends Component {
  onLoadMore() {}
  render() {
    return (
      <button type="button" onClick={this.onLoadMore}>
        Load more
      </button>
    );
  }
}

export default Button;
