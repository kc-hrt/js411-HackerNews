import React, { Component } from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInterested: false,
    };

    // console.log("🦖", props);
    // console.log("🦕", props.singleArticle.created_at);
  }

  handleIsInterested = () => {
    this.setState((prevState) => ({ isInterested: !prevState.isInterested }));
    console.log(this.state.isInterested);
  };

  render() {
    const { isInterested } = this.state;
    const { objectID, url, title, points, author, num_comments } =
      this.props.singleArticle;

    const age = formatDistanceToNowStrict(
      new Date(this.props.singleArticle.created_at)
    );

    // console.log("🍕", age);

    return (
      <div>
        {isInterested ? (
          <div className="not-interested" onClick={this.handleIsInterested}>
            <p>🙈 Article Hidden 🙈</p>
          </div>
        ) : (
          <article key={objectID}>
            <a className="title" href={url}>
              {title}
            </a>
            <span className="url-text">{url}</span>
            <div className="story-text">
              {points} | {author} | {age} | {num_comments} comments |{" "}
              <div className="interested" onClick={this.handleIsInterested}>
                ⛔️
              </div>
            </div>
          </article>
        )}
      </div>
    );
  }
}

export default Article;
