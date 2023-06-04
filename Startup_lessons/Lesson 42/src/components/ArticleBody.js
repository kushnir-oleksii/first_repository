import React, {Component} from "react";

class ArticleBody extends Component{
  render(){
    //console.log(this.props);
            return (
             
              <div className="article">
                <div className="article__title">
                <h2 className="article__title--text">{this.props.lang.title_text}</h2>
                </div> 
                <div className="article__body">
                <h3 className="article__description">{this.props.lang.description}</h3>
                <p className="article__description--text">{this.props.lang.description_text}</p>
                </div>
              </div>
              )
          }
  }


export default ArticleBody;