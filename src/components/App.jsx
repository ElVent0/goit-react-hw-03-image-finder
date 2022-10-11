import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    pictures: [],
    word: '',
  };

  handlerSubmit = word => {
    this.setState({
      word: word,
    });
  };

  async componentDidMount() {
    const data = await fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=15486639-fb36d9e164edb7a2c5eb45855&image_type=photo&orientation=horizontal&per_page=12'
    );
    const parsedData = await data.json();

    this.setState({
      pictures: parsedData,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.word !== prevState.word) {
      const data = await fetch(
        `https://pixabay.com/api/?q=${this.state.word}&page=1&key=15486639-fb36d9e164edb7a2c5eb45855&image_type=photo&orientation=horizontal&per_page=12`
      );
      const parsedData = await data.json();

      this.setState({
        pictures: parsedData,
      });
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
        <ImageGallery dataArray={this.state.pictures.hits} />
        <Button />
      </>
    );
  }
}
