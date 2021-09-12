import React, { Component } from 'react';

class Search extends Component {

  state = {
    searchInput: '',
    searchType: 'story'
  }

  setSearchInput = (e) => {
    const searchInput = e.target.value;
    this.setState({ searchInput })
  }

  setSearchType = (e) => {
    const searchType = e.target.value
    this.setState({ searchType })
  }

  onClickSearch = () => {
    const {searchInput, searchType} = this.state;
    const{ onSearchEvent } = this.props;
    onSearchEvent(searchInput, searchType)
  }

  render() {
    const { searchInput, searchType } = this.state;
    return (
      <div className="searchBar">
        <div>
          <input
            type="text"
            value={searchInput}
            placeholder="type something to search..."
            onChange={this.setSearchInput}
          />
          <button
            onClick={this.onClickSearch}
          >
            🔎 Search
          </button>
        </div>
        <div className="searchBy">
          Search by:
          
          <label
            htmlFor="story"
          >
            Story
          </label>
          <input
            type="radio"
            id="story"
            name="search-type"
            value="story"
            checked={searchType === 'story'}
            onChange={this.setSearchType}
          />

          <label
            htmlFor="author">
            Author
          </label>
          <input
            type="radio"
            id="author"
            value="author"
            name="search-type"
            checked={searchType === 'author'}
            onChange={this.setSearchType} 
          />
        </div>
        
      </div>
    );
  }
}

export default Search;
