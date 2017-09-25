import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import InputBook from '../containers/input-book';

class App extends Component {
  render() {
    return (
      <div>
      	<InputBook />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;