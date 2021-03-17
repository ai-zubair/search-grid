import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class Landing extends Component {

  onSearchFormSubmit = (searchTerm: string) => {
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchFormSubmit={this.onSearchFormSubmit}/>
      </div>
    );
  }
};

