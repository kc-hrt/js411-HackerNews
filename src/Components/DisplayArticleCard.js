import React, { Component } from 'react';
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

class DisplayArticleCard extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      isInterested: false,
    };

    console.log('🦖',props);
    console.log('🦕',props.singleArticle.created_at);
  }

  handleIsInterested = () => {
    this.setState((prevState) => ({ isInterested: !prevState.isInterested }));
    console.log(this.state.isInterested);
  };

  render() {
    const { isInterested } = this.state;
    const { url, title, points, author, num_comments } = this.props.singleArticle;

    const age = formatDistanceToNowStrict(
      new Date(this.props.singleArticle.created_at)
    );

    return (
      <div>
        {isInterested ? (
          <div className="not-interested" onClick={this.handleIsInterested}>
            🙈 Article Hidden 🙈
          </div>
        ) : ( 
          <article>
            <a className="title" href={url} target="_blank" rel='noreferrer noopener'>{title} </a>
            <span className="url-text">({url})</span>
            <div className="story-text">
              {points} points | {author} | {age} | {num_comments} comments
            </div>
            <div className="interested" onClick={this.handleIsInterested}>
              ⛔️
            </div>
          </article>
        )}  
      </div>
    )
  }
}

export default DisplayArticleCard;