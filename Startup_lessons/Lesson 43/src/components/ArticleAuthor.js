import React from "react";

function ArticleAuthor(props) {
  const { lang } = props;
  return (
    <div className="article__author">
      <p className="article__author--name">{lang.Author}</p>
      <p className="article__author--date">{lang.Published}</p>
      <p className="article__author--theme">{lang.Theme}</p>
    </div>
  );
}

export default ArticleAuthor;
