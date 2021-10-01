import React, { Component } from 'react';
import DisplayArticleCard from './DisplayArticleCard';

export default class Article extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <ul>
        {this.props.articlesList.map((article) => {
          return <DisplayArticleCard singleArticle={article} />
        })}
      </ul>
    )
  }
}