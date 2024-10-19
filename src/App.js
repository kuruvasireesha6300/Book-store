import React, { useState } from 'react';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Search from './components/Search';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10 },
    { id: 2, title: '1984', author: 'George Orwell', price: 15 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12 },
    // Add more books here...
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bookstore</h1>
      <Search setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;

