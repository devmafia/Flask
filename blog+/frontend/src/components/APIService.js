
export default class APIService {
  
    static UpdateArticle(id, body) {
      return fetch(`http://localhost:5000/update/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .then(resp => resp.json())
      .catch(error => console.log("Error in UpdateArticle:", error));
    }
  
    static InsertArticle(body) {
      return fetch(`http://localhost:5000/add`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .then(resp => {
        if (!resp.ok) {
          return resp.text().then(text => { throw new Error(text); });
        }
        return resp.json();
      })
      .catch(error => {
        console.log("Error in InsertArticle:", error);
        throw error;
      });
    }

    static DeleteArticle(id) {
        return fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        .catch(error => console.log("Error in UpdateArticle:", error));
      }
  }
  