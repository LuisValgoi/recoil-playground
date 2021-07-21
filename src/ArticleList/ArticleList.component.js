import React from "react";
import Article from "../Article/Article.component";
import "./ArticleList.style.scss";
import { useRecoilValueLoadable } from "recoil";
import { articleQuery } from "../shared/globalState";

const ArticleList = () => {
  const articles = useRecoilValueLoadable(articleQuery);

  const renderArticles = () => {
    switch (articles.state) {
      case "hasValue":
        return articles.contents.map((article) => (
          <Article key={article.id} item={article} />
        ));
      default:
      case "loading":
      case "hasError":
        return <div>Loading...</div>;
    }
  };

  return <div className="ArticleList">{renderArticles()}</div>;
};

export default ArticleList;
