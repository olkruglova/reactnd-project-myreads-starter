import React, { Components } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    Books: []
  }
    componentDidMount(){
      this.fetch_books_details()
    }
     fetch_books_details = () => {
      BooksAPI.getAll().then((books)=> {
        this.setState({
          Books: books
        })
      })
    }
     update_books_details = (book, shelf) =>{
      BooksAPI.update(book, shelf).then(()=>{
        this.fetch_books_details()
      })
    }


  render() {
    return (
      <div className="app">
      <Route
        exact path="/"
        render={() => (
          <BookList
            books={this.state.Books}
            onChange={this.update_books_details}
          />
        )}
      />
      <Route
          exact path="/search"
          render={({ history }) => (
            <Search
              onChange={this.update_books_details}
              myBooks={this.state.Books}
            />
          )}
        />
    </div>
    )
  }
}

export default BooksApp
