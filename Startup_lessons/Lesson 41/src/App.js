import React from "react";
import Article from "./components/Article";
import ArticleBody from "./components/Article";
import ArticleActions from "./components/Article";
import ArticleAutor from "./components/Article";


function App() {
  return (
    <div className="wrapper">
      <h1 className="title">NVIDIA news</h1>
      <div className="article">
      <Article />
      
      </div>
    </div> 
    );
  }
export default App;