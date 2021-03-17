import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

export default class Landing extends Component {

  state = {
    imageData: []
  }

  onSearchFormSubmit = async(searchTerm: string) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: searchTerm
      },
      headers: {
        Authorization: 'Client-ID xw80LYvdz-jemzk7IgjPRxyJulxIw-KsvLIuZWl9XyM'
      }
    });
    this.setState({ imageData: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchFormSubmit={this.onSearchFormSubmit} />
        Found: {this.state.imageData.length} results
      </div>
    );
  }
};

