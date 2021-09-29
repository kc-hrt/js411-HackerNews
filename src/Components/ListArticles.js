import React, { Component } from "react";
import "../App.css";

export default class Article extends Component {
  // constructor(props) {
  //   super(props);

  //   console.log("🦖", props);
  //   console.log("🦕", props.singleArticle.created_at);
  // }

  render() {
    return (
      <article key={this.props.singleArticle.objectID}>
        <a className="title" href={this.props.singleArticle.url}>
          {this.props.singleArticle.title}
        </a>
        <span className="url-text">{this.props.singleArticle.url}</span>
        <div className="story-text">
          {this.props.singleArticle.points} | {this.props.singleArticle.author}{" "}
          | {this.props.singleArticle.created_at} |{" "}
          {this.props.singleArticle.num_comments} comments
        </div>
      </article>
    );
  }
}
