import React, { Component } from "react";

import Article from "./components/Article";
import LangContext from "./components/lang-context";
let EN = {
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  current_lang: "EN",
};
let UA = {
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  current_lang: "UA",
};
let langBtns;

class App extends Component {
  constructor() {
    super();
    this.state = { lang: EN };
  }

  SetLangEN() {
    this.setState({ lang: EN });
  }

  SetLangUA() {
    this.setState({ lang: UA });
  }
  componentDidMount() {
    langBtns = document.querySelectorAll(".lang-btn");
    langBtns[1].classList.add("active");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      langBtns.forEach((btn) => btn.classList.remove("active"));
      this.state.lang.current_lang === "UA"
        ? langBtns[0].classList.add("active")
        : langBtns[1].classList.add("active");
    }
  }

  render() {
    return (
      <div className="wrapper">
        <LangContext.Provider value={this.state.lang}>
          <h1 className="title">NVIDIA news</h1>
          <Article>
            <div className="article__title">
              <h2>NVIDIA Accelerated AI on Azure</h2>
            </div>
          </Article>
          <div className="lang">
            <button className="lang-btn" onClick={this.SetLangUA.bind(this)}>
              UA
            </button>
            <button className="lang-btn" onClick={this.SetLangEN.bind(this)}>
              EN
            </button>
          </div>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;
