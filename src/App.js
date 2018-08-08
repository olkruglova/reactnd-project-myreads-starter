import React, { Components } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
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
      console.log(book);
      console.log(shelf);
      BooksAPI.update(book, shelf).then(()=>{
        this.fetch_books_details()
      })
    }


  render() {
    return (
      <div className="app">
        <BookList
          books={this.state.Books}
          onChange={this.update_books_details}/>
      </div>
    )
  }
}

export default BooksApp
