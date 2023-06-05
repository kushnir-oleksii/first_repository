import React from "react";
import Article from "./components/Article";

function App() {
  let article = <h2>NVIDIA Accelerated AI on Azure</h2>;

  if (!article) {
    article = <h2>Article missing</h2>;
  }

  return (
    <div>
      <h1
        className="title"
        data-lang="en"
        tabIndex="0"
        id="news"
        title="Our articles"
      >
        NVIDIA news
      </h1>
      {article && article}
      {!article ? <h2>Article missing</h2> : article}
      <Article />
    </div>
  );
}
export default App;

/* (
  <div>
    <h1>NVIDIA news</h1>
    <h2>NVIDIA Accelerated AI on Azure</h2>
  </div>
  ); */
