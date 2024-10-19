import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((book, index) => (
            <li key={index}>{book.title} - ${book.price}</li>
          ))}
        </ul>
      )}
      <h3>Total: ${cart.reduce((total, book) => total + book.price, 0)}</h3>
    </div>
  );
};

export default Cart;
