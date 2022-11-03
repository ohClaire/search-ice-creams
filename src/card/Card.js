import React from 'react';
import './Card.css';

const Card = ({ name, rating, ingredients }) => {
  return (
    <div className="ice-cream-card">
      <h2>Name: {name}</h2>
      <p>Rating: {rating}</p>
      <p>Ingredients: {ingredients}</p>
    </div>
  );
};

export default Card;
