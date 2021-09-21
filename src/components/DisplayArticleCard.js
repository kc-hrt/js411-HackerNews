import React, { Component } from 'react';

class DisplayArticleCard extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    console.log('🦖',props);
    console.log('🦕',props.singleArticle.created_at);
  }

  render() {
    return (
      <article>
        <a className="title" href={this.props.singleArticle.url} target="_blank" rel='noreferrer noopener'>{this.props.singleArticle.title}</a>
        <span className="url-text">{this.props.singleArticle.url}</span>
        <div className="story-text">
          {this.props.singleArticle.points} points | {this.props.singleArticle.author} | {this.props.singleArticle.created_at} | {this.props.singleArticle.num_comments} comments
        </div>
      </article>
    )
  }
}

export default DisplayArticleCard;