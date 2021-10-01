import React, { Component } from 'react';

class DisplayArticleCard extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state={
      isInterested: false
    }
    console.log('🦖',props);
    console.log('🦕',props.singleArticle.created_at);
  }
  
  handleIsInterested = () => {
    this.setState(prevState => ({isInterested: !prevState.isInterested}))
    console.log(this.state.isInterested);
  }

  render() {
    const { url, title, points, author, created_at, num_comments } = this.props.singleArticle;
    const {isInterested} = this.state;
    return (
      <div>

      {isInterested
        ? <div onClick={this.handleIsInterested}>hello</div>
        :
        
        <article className="story-container">
          <a className="title" href={url} target="_blank" rel='noreferrer noopener'>{title}</a>
          <span className="url-text">{url}</span>
          <div className="story-text">
            {points} points | {author} | {created_at} | {num_comments} comments
          </div>
          <button onClick={this.handleIsInterested}>Not Interested</button>
        </article>

}
</div>

    )
  }
}

export default DisplayArticleCard;