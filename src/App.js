import React from "react";
import Article from "./Components/Article";


const URL = 'http://hn.algolia.com/api/v1/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    console.log('mounted 🌵', this.state.articles);
    const res = await fetch(URL);
    const data = await res.json();
    this.setState({
      articles: data.hits,
    });
  }

  componentDidUpdate() {
    console.log('updated ☀️', this.state.articles);
  }

  render() {
    return <div className='grid'>
      {this.state.articles.map((article) => {
        return <Article singleArticle={article} />
      })}
    </div>;
  }
}

export default App;