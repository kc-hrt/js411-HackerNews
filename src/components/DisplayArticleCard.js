import React, { Component } from 'react';
import './DisplayArticleCard.css'

class DisplayArticleCard extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    console.log('🦖',props);
    console.log('🦕',props.singleArticle.created_at);
  }

  render() {
    const { url, title, points, author, created_at, num_comments } = this.props.singleArticle;

    return (
      <article>
        <a className="title" href={url} target="_blank" rel='noreferrer noopener'>{title} </a>
        <span className="url-text">({url})</span>
        <div className="story-text">
          {points} points | {author} | {created_at} | {num_comments} comments
        </div>
      </article>
    )
  }
}

export default DisplayArticleCard;