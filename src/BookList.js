import React, { Component } from 'react'
import Shelf from './Shelf'

class BookList extends Component {
  render () {

    const books = this.props.books

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
                books={books.filter((book)=>(
                    book.shelf === "currentlyReading"
                ))}
                title = "Currently Reading"
                onChangeShelf={this.props.onChange}/>
                <Shelf books={books.filter((book)=>(
                    book.shelf === "read"
                ))}
                title = "Read"
                onChangeShelf={this.props.onChange}/>
                <Shelf books={books.filter((book)=>(
                    book.shelf === "wantToRead"
                ))}
                title = "Want to Read"
                onChangeShelf={this.props.onChange}
            />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}
 export default BookList;