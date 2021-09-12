import React, { Component } from 'react';
import axios from 'axios'
import Story from './Story';
import Search from './Search';

class StoryList extends Component {

  baseUrl = 'http://hn.algolia.com/api/v1/search?'

  state = {
    isLoading: true,
    stories: []
  }

  componentDidMount() {
    this.getStories('')
  };

  getStories = (params) => {
    this.setState({ isLoading: true})

    const url = `${this.baseUrl}${params}`

    axios.get(url)
      .then(response => response.data)
      .then(data => {
        console.log(data.hits)
        this.setState({ isLoading: false, stories: data.hits})
      })
  }

  getQueryParams = (searchQuery, searchType) => {
    const params = searchType === 'story'
      ? `query=${searchQuery}&tags=story`
      : `tags=story,author_${searchQuery}`

      return params
  }

  onSearch = (searchQuery, searchType) => {
    const params = this.getQueryParams(searchQuery, searchType)

    this.getStories(params)
  }

  render() {
    const { isLoading, stories } = this.state;
    return (
      <div>
        <div>
          <Search onSearchEvent={this.onSearch} />
        </div>

        {isLoading
          ? <div className="loading">Loading Stories... </div>
          : <div className="storiesContainer">
            {
              stories.map(story => {
                return (
                  <Story key={story.objectID} {...story} />
                )
              })
            }
          </div>
        }
      </div>
    );
  }
}

export default StoryList;
