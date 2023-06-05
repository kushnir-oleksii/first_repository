import React, {Component} from "react";
import LangContext from "./lang-context";

class ArticleBody extends Component{
  render(){
    //console.log(this.props);
    return (
      <LangContext.Consumer>
       {
        (context) => {
            return (
             
              <div className="article">
                <div className="article__title">
                <h2 className="article__title--text">{context.title_text}</h2>
                </div> 
                <div className="article__body">
                <h3 className="article__description">{context.description}</h3>
                <p className="article__description--text">{context.description_text}</p>
                </div>
              </div>
              )
          }
  }
</LangContext.Consumer>)}}

export default ArticleBody;