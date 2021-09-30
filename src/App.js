import React from 'react';
import ListArticles from './components/ListArticles'
import './App.css';

let URL =
  "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=100";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchSelect: "story",
      searchBy: "byPopulatity",
      searchRange: "all",
      articles: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    console.log("mounted 🌵", this.state.articles);
    const res = await fetch(URL);
    const data = await res.json();
    this.setState({
      articles: data.hits,
    });
  }

  componentDidUpdate() {
    console.log("updated ☀️", this.state.articles);
  }

  updateFetch = (URLsearch) => {
    console.log("🐝📓", URLsearch);
    fetch(URLsearch)
      .then((res) => res.json())
      .then((searchData) => {
        console.log("🦋🧑‍🦳", searchData.hits);
        this.setState({
          articles: searchData.hits,
        });
        console.log("🦋📓", this.state.articles);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("🍄", this.state.searchSelect);
    // author search doesn't work
    if (this.state.searchRange === "all") {
      this.state.searchSelect === "author"
        ? this.updateFetch(
            `https://hn.algolia.com/api/v1/search?tags=story,author_${this.state.searchTerm}&hitsPerPage=100`
          )
        : this.updateFetch(
            `http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=${this.state.searchSelect}&hitsPerPage=100`
          );
    } else {
      this.state.searchSelect === "author"
        ? this.updateFetch(
            `https://hn.algolia.com/api/v1/search?tags=story,author_${this.state.searchTerm}&numericFilters=created_at_i>${this.state.searchRange}&hitsPerPage=100`
          )
        : this.updateFetch(
            `http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=${this.state.searchSelect}&numericFilters=created_at_i>${this.state.searchRange}&hitsPerPage=100`
          );
    }
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSelectChange = (e) => {
    e.preventDefault();
    console.log("🍄💭", e.target.value);
    this.setState({ searchSelect: e.target.value });
  };

  handleSelectSort = (e) => {
    e.preventDefault();
    console.log("💐", e.target.value);
    this.setState({ searchBy: e.target.value });
    if (e.target.value === "byDate") {
      console.log("🦚", this.state.articles);
      const sorted = this.state.articles.sort(
        (a, b) => b.created_at_i - a.created_at_i
      );
      console.log("🌼", sorted);
      this.setState({ articles: sorted });
    } else {
      console.log("🦚", this.state.articles);
      const sorted = this.state.articles.sort((a, b) => b.points - a.points);
      console.log("🌼", sorted);
      this.setState({ articles: sorted });
    }
  };

  handleSearchRange = (e) => {
    e.preventDefault();
    let searchDate = new Date();
    switch (e.target.value) {
      case "all":
        console.log("🎃", e.target.value);
        this.setState({ searchRange: "all" });
        break;
      case "last24h":
        console.log("🎃", e.target.value);
        searchDate.setDate(searchDate.getDate() - 1);
        this.setState({
          searchRange: searchDate.valueOf().toString().slice(0, 10),
        });
        break;
      case "pastWeek":
        console.log("🎃", e.target.value);
        searchDate.setDate(searchDate.getDate() - 7);
        this.setState({
          searchRange: searchDate.valueOf().toString().slice(0, 10),
        });
        break;
      case "pastMonth":
        console.log("🎃", e.target.value);
        searchDate.setMonth(searchDate.getMonth() - 1);
        this.setState({
          searchRange: searchDate.valueOf().toString().slice(0, 10),
        });
        break;
      case "pastYear":
        console.log("🎃", e.target.value);
        searchDate.setFullYear(searchDate.getFullYear() - 1);
        this.setState({
          searchRange: searchDate.valueOf().toString().slice(0, 10),
        });

        break;
      default:
        console.log("💥", e.target.value);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="search-bar">
          <form onSubmit={this.handleSubmit} className="searchContainer">
            <input
              className="inputBar"
              type="text"
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
            <label>
              Search
              <select
                value={this.state.searchSelect}
                name={this.props.name}
                onChange={this.handleSelectChange.bind(this)}
              >
                <option value="story">📓 Stories</option>
                <option value="author">🧑‍🦳 Authors</option>
                <option value="comment">💭 Comments</option>
              </select>
            </label>
            <label>
              by
              <select
                value={this.state.searchBy}
                name={this.props.name}
                onChange={this.handleSelectSort.bind(this)}
              >
                <option value="byDate">📓 Date</option>
                <option value="byPopularity">🧑‍🦳 Popularity</option>
              </select>
            </label>
            <label>
              for
              <select
                name={this.props.name}
                onChange={this.handleSearchRange.bind(this)}
              >
                <option value="all">All Time</option>
                <option value="last24h">Last 24h</option>
                <option value="pastWeek">Past Week</option>
                <option value="pastMonth">Past Month</option>
                <option value="pastYear">Past Year</option>
              </select>
            </label>
          </form>
        </div>
        <ListArticles articlesList={this.state.articles} />
      </div>
    );
  }
}

export default App;
