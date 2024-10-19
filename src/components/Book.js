import React from 'react';

const Book = ({ book, addToCart }) => {
  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default Book;
