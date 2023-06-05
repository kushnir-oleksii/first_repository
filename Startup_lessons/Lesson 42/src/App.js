import React, {Component, createContext} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/lang-context";


let EN = {
  title : 'NVIDIA NEWS',
  title_text : 'NVIDIA Accelerated AI on Azure',
  description: 'Article description:',
  description_text: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  button_text : 'Read',
  current_lang: 'EN'
}
let UA = {
  title : 'НОВИНИ NVIDIA',
  title_text : 'Прискорений штучний інтелект NVIDIA в Azure',
  description: 'Опис статті:',
  description_text: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  button_text : 'Читати',
  current_lang: 'UA'
}

let langBtns;
class App extends Component{
  constructor(){
    super()
    this.state = {
      lang: EN
    };
  }

  componentDidMount() {
    langBtns = document.querySelectorAll(".lang-btn");
    langBtns[1].classList.add("active");

    const selectedLang = localStorage.getItem("lang");
    if (selectedLang) {
      this.setState({ lang: selectedLang === "UA" ? UA : EN });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      langBtns.forEach((btn) => btn.classList.remove("active"));
      this.state.lang.current_lang === "UA"
        ? langBtns[0].classList.add("active")
        : langBtns[1].classList.add("active");

      localStorage.setItem("lang", this.state.lang.current_lang);
    }
  }

  SetLangEN(){
    this.setState({lang: EN})
  }

  SetLangUA(){
    this.setState({lang: UA})
  }

  render(){
    return (
      <div className="wrapper">
        <LangContext.Provider value={this.state.lang}>
       <h1 className="title">{this.state.lang.title}</h1>
          <Article>
          </Article>
        <div className="lang">
          <button onClick={this.SetLangUA.bind(this)} 
          className="lang-btn">UA</button>
          <button onClick={this.SetLangEN.bind(this)}
           className="lang-btn">EN</button>
        </div>
        </LangContext.Provider>
      </div> )}}

export default App;