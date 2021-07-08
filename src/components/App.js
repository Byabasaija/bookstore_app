import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../styles/styles.css';

function App() {
  return (
    <div className="panel-bg">
      <div className="Header-bg">
        <h1 className="Bookstore-CMS d-inline">Bookstore CMS</h1>
        <span className="BOOKS">BOOKS</span>
        <span className="CATEGORIES">CATEGORIES</span>
        <i className="fas fa-user icon" />
      </div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
