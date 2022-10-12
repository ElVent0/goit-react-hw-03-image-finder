import React, { Component } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#252525"
      />
    );
  }
}

export default Loader;
