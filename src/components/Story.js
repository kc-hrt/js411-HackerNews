import React, { Component } from 'react';

class Story extends Component {
  state = {story: null}

  render() {
    const { title, author, num_comments, created_at, url } =this.props;
    const createdDateFormatted = new Date(created_at).toLocaleDateString('en-US')

    return (
      <div className="story-container">
        <a
          className="storyTitle"
          href={url}
          target="_blank"
          rel="noreferrer"  
        >
          {title}
        </a>
        <div
          className="metaData"
        >
          By {author} | {num_comments} comments | {createdDateFormatted}
        </div>
      </div>
    );
  }
}

export default Story;
