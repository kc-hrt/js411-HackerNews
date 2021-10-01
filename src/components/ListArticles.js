import React, { Component } from "react";
import Article from "./DisplayArticleCard";

class ListArticles extends Component {
  constructor(props) {
    super(props);

    console.log("🦖", props.articleList);
    // console.log("🦕", props.singleArticle.created_at);
  }

  render() {
    return (
      <div>
        {this.props.articleList.map((article, index) => {
          return <Article singleArticle={article} key={index} />;
        })}
      </div>
    );
  }
}

export default ListArticles;
