import React, { Component } from 'react';

class SearchBar extends Component{
  render(){
    return(
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search-bar">Search Images</label>
            <input id="search-bar" type="text" />  
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;