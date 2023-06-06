import React, { useState } from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleAuthor from "./components/ArticleAuthor";

function App() {
  let EN = {
    title: "NVIDIA NEWS",
    title_text: "NVIDIA Accelerated AI on Azure",
    description: "Article description:",
    description_text:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    Mark_as_read : 'Mark as read',
    button_text: "Read",
    button_text_close: "Close",
    current_lang: "EN",
    Mark_as_unread : 'Mark as unread',
    lang_content : 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
    Author : 'Author: Mike',
    Published : 'Published: 06.12.2022',
    Theme : 'Theme: Video cards'
  };

  let UA = {
    title: "НОВИНИ NVIDIA",
    title_text: "Прискорений штучний інтелект NVIDIA в Azure",
    description: "Опис статті:",
    description_text:
      "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
    Mark_as_read : 'Прочитано',
    button_text: "Читати",
    button_text_close: "Закрити",
    current_lang: "UA",
    Mark_as_unread : 'Не прочитано',
    lang_content : "Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.",
    Author : "Автор: Майк",
    Published : 'Опубліковано: 06.12.2022',
    Theme : 'Тема: відео карти'
  };

  const [lang, setLang] = useState(EN);
  const [isShow, setIsShow] = useState(false);
  const [isRead, setIsRead] = useState(false);

  function switchToUA() {
    setLang(UA);
  }

  function switchToEN() {
    setLang(EN);
  }

  const toggleArticle = () => {
    setIsShow(!isShow);
    setIsRead(false);
  };

  const markAsRead = () => {
    if (!isShow) {
      setIsRead(true);
    }
  };

  const markAsUnread = () => {
    setIsRead(false);
  };

  const article = {
    description: lang.description,
    preview: lang.description_text,
    content:
      lang.lang_content
  };

 

  return (
    <div className="wrapper">
      <h1 className="title">{lang.title}</h1>
      <div className={`article ${isRead ? "read" : ""}`}>
        <div className={`article__title ${isRead ? "read" : ""}`}>
          <h2>{lang.title_text}</h2>
        </div>
        <ArticleBody read={isRead} show={isShow} text={article} />
        <div className="article__actions">
          <button
            onClick={markAsRead}
            className={`article__btn ${
              isRead ? "read" : ""
            } ${isShow ? "hidden" : "read"}`}
          >
            {lang.Mark_as_read}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isShow ? "Close" : lang.button_text}
          </button>
          <button onClick={markAsUnread} className="article__btn">
          {lang.Mark_as_unread}
          </button>
        </div>
        <ArticleAuthor lang={lang} />
      </div>
      <div className="lang">
        <button className="lang-btn" onClick={switchToUA}>
          UA
        </button>
        <button className="lang-btn" onClick={switchToEN}>
          EN
        </button>
      </div>
    </div>
  );
}

export default App;
