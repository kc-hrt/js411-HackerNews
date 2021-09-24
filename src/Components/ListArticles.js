import React, { Component } from "react";
import "../App.css";

export default class Article extends Component {
  // state = {liked: false};

  // clicked = () => {
  //   this.setState({ liked: !this.state.liked });
  //   console.log('🌈', this.state.liked);
  // };

  constructor(props) {
    super(props);

    console.log("🦖", props);
    console.log("🦕", props.singleArticle.created_at);
  }

  render() {
    // let btnColor = this.state.liked ? "green" : "black";
    // let btnText = this.state.liked ? "👍" : "like";
    return (
      <article>
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
