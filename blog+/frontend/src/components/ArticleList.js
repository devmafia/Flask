import React from "react";
import APIService from "./APIService";

function ArticleList(props) {

    const editArticle = (article) => {
        props.editArticle(article);
    }

    const deleteArticle = (article) => {
        APIService.DeleteArticle(article.id)
        .then(() => props.deleteArticle(article))  
    }

    return (
        <div>
            {props.articles && props.articles.map(article => {
      return (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>{article.date}</p>
          <div className="row">
            <div className="col-md-1">
                <button onClick = {() => editArticle(article)} className="btn btn-primary">Update</button>
            </div>
            <div className="col-md-1">
                <button onClick={() => deleteArticle(article)} className="btn btn-danger">Delete</button>
            </div>
          </div>
          <hr/>
        </div>
      )
      })}

     
        </div>
    )
}

export default ArticleList;