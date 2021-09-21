import React from 'react';
import ListArticles from './components/ListArticles'
import './App.css';

const URL = 'https://hn.algolia.com/api/v1/search';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    console.log('mounted 🌵', this.state.articles);
    let res = await fetch(URL);
    let data = await res.json();
    this.setState({      
      articles: data.hits
    })
  }

  componentDidUpdate() {
    console.log('updated ☀️', this.state.articles);
  }

  render() {
    return (
      <div className="App">
        {/* <SearchForm /> */}
        <ListArticles articlesList={this.state.articles} />
      </div>
    );
  }
}

export default App;
