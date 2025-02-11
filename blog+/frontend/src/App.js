import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from "./components/Form";

function App() {
  const [articles, setArticles]= useState([])
  const [editedArticle, setEditedArticle]= useState(null)

  useEffect(() => {
    fetch("http://localhost:5000/get", {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
      }  
    }).then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  const editArticle = (article) => {
    setEditedArticle(article)
  }

  const updatedData = (article) => {
    const new_article = articles.map(my_article => {
      if(my_article.id  === article.id) {
        return article
      } else {
        return my_article
      }
    })
    setArticles(new_article)
  }

  const openForm = () => {
    setEditedArticle({title: '', body: ''})
  }

  const insertedArticle = (article) => {
    const new_article = [...articles, article]
    setArticles(new_article)
  }

  const deleteArticle = (article) => {
    const new_articles = articles.filter(myarticle => {
      if (myarticle.id === article.id) {
        return false;
      }
      return true;
    })

    setArticles(new_articles)
  }

  return (
    <div className="App">      
      <div className='row'>
        <div className='col'>
          <h1>Flask and ReactJS</h1>
        </div>
        <div className='col'>
          <button onClick={openForm} className='btn btn-success'>InsertArticle</button>
        </div>
      </div>
      <ArticleList articles = {articles} editArticle= {editArticle} deleteArticle={deleteArticle}></ArticleList>
      {editedArticle ? <Form article = {editedArticle} updatedData = {updatedData} insertedArticle = {insertedArticle}></Form> : null}
    </div>

    
  );
}

export default App;
