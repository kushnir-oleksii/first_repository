import React from "react";

function Article() {
  return (
    <div className="article">
      <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
      </div>
      <ArticleBody />
      <ArticleActions />
      <ArticleAutor />
    </div>
  );
}

function ArticleAutor() {
  return (
    <div className="article__autor">
      <div>
        <h3>Author: Mike</h3>
      </div>
      <div>
        <h3>Published: 06.12.2022</h3>
      </div>
      <div>
        <h3>Theme: Video cards</h3>
      </div>
    </div>
  );
}

function ArticleActions() {
  return (
    <div className="article__actions">
      <button className="button">
        <h3>Read</h3>
      </button>
      <button className="button">
        <h3>Mark as read</h3>
      </button>
      <button className="button">
        <h3>Mark as unread</h3>
      </button>
    </div>
  );
}

function ArticleBody() {
    return (
        <div className="article__body">
          <div className="black-border">
            <h3>Article description</h3>
            <p>Nvidia on Azure is bringing AI, networking, and high-performance computing to the eterprise.</p>
          </div>
        </div>
      );
  }

export default Article;
