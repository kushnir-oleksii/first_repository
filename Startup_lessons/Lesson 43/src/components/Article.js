import React from "react";
import ArticleBody from "./ArticleBody";

function Article(props) {
  const { show, text } = props;

  return (
    <>
      {show && (
        <div>
          <ArticleBody text={text} />
        </div>
      )}
    </>
  );
}

export default Article;
