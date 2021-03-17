import React, { ChangeEvent, Component, FormEvent } from 'react';

class SearchBar extends Component<{onSearchFormSubmit: Function},{}>{

  state = {
    searchTerm: ''
  }

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearchFormSubmit(this.state.searchTerm);
  }

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-bar">Search Images</label>
            <input id="search-bar" type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;