import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class Landing extends Component {

  state = {
    imageData: []
  }

  onSearchFormSubmit = async(searchTerm: string) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: searchTerm
      }
    });
    console.log(response);
    this.setState({ imageData: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchFormSubmit={this.onSearchFormSubmit} />
        Found: {this.state.imageData.length} results
        <ImageList imageData={this.state.imageData}/>
      </div>
    );
  }
};

