import React, { useState } from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleAuthor from "./components/ArticleAuthor";

function App() {
  const article = {
    description: "Описание статьи:",
    preview:
      "NVIDIA в Azure привносит искусственный интеллект, сетевые возможности и высокопроизводительные вычисления в предприятия.",
    content:
      "Microsoft Azure и NVIDIA предоставляют предприятиям в облаке возможность использовать комбинированную мощность ускоренных вычислений NVIDIA и сетевых возможностей NVIDIA по требованию для различных вычислительных задач в области искусственного интеллекта, машинного обучения, анализа данных, графики, виртуальных рабочих столов и высокопроизводительных вычислений (HPC). От дробных GPU и одного GPU до нескольких GPU на нескольких узлах для распределенных вычислений — выбирайте подходящее ускорение GPU для своих задач.",
  };

  const [isShow, setIsShow] = useState(false);
  const [isRead, setIsRead] = useState(false);

  const toggleArticle = () => {
    setIsShow(!isShow);
    setIsRead(false); // Убрать класс read при раскрытии полного текста
  };

  const markAsRead = () => {
    if (!isShow) {
      setIsRead(true);
    }
  };

  const markAsUnread = () => {
    setIsRead(false);
  };

  return (
    <div className="wrapper">
      <h1 className="title">Новости NVIDIA</h1>
      <div className={`article ${isRead ? "read" : ""}`}>
        <div className={`article__title ${isRead ? "read" : ""}`}>
          <h2>Ускоренный искусственный интеллект NVIDIA в Azure</h2>
        </div>
        <ArticleBody read={isRead} show={isShow} text={article} />
        <div className="article__actions">
          <button
            onClick={markAsRead}
            className={`article__btn ${isRead ? "read" : ""} ${isShow ? "hidden" : ""}`}
          >
            Mark as read
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isShow ? "Закрыть" : "Читать"}
          </button>
          <button onClick={markAsUnread} className="article__btn">
            Mark as unread
          </button>
        </div>
        <ArticleAuthor />
      </div>
      <div className="lang">
        <button className="lang-btn">UA</button>
        <button className="lang-btn">EN</button>
      </div>
    </div>
  );
}

export default App;
