import React, { Component } from "react";
// import "../App.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchSelect: props.value,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSelectChange(e) {
    e.preventDefault();
    this.setState({ searchSelect: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.searchSelect === "author") {
      let URLauthor = `http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=story`;
      console.log("🐝📓", URLauthor);
      fetch(URLauthor)
        .then((res) => res.json())
        .then((searchData) => {
          console.log("🦋🧑‍🦳", searchData.hits);
          this.setState({
            articles: searchData.hits,
          });
        });
    } else {
      let URLstory = `http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=story`;
      console.log("🐝📓", URLstory);
      fetch(URLstory)
        .then((res) => res.json())
        .then((searchData) => {
          console.log("🦋", searchData.hits);
          this.setState({
            articles: searchData.hits,
          });
        });
    }
  }

  render() {
    return (
      <div className="search-bar">
        <h2>Hacker News</h2>
        <form onSubmit={this.handleSubmit} className="searchContainer">
          <input
            className="inputBar"
            type="text"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
          <label>
            Search by:
            <select
              value={this.state.selectalue}
              name={this.props.name}
              onChange={this.handleSelectChange.bind(this)}
            >
              <option value="story">📓 Stories</option>
              <option value="author">🧑‍🦳 Authors</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
