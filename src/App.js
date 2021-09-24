import React from "react";
import Article from "./Components/ListArticles";
import SearchForm from "./Components/SearchForm";

let URL = "http://hn.algolia.com/api/v1/search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchSelect: "",
      articles: [],
    };
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

  searchedItems = (items) => {
    console.log("these are searched items", items);
    this.setState({ articles: items });
  };

  handleClick() {
    const sorted = this.state.articles.sort(
      (a, b) => b.created_at_i - a.created_at_i
    );
    this.setState({ articles: sorted });
    console.log("articless after date click ", this.state.articles);
  }

  render() {
    return (
      <div className="container">
        <SearchForm />
        <div>
          {this.state.articles.map((article) => {
            return <Article singleArticle={article} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
