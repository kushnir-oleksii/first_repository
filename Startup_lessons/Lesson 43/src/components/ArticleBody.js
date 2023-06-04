import React from "react";

function ArticleBody(props) {
  const { read, show, text } = props;

  return (
    <div className={`article__body ${read ? "read" : ""}`}>
      {!show && (
        <h3 className="article__description">{text.description}</h3>
      )}
      <p className="article__text">{show ? text.content : text.preview}</p>
    </div>
  );
}

export default ArticleBody;
