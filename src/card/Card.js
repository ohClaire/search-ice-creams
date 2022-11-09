import React from 'react';
import Counter from '../counter/Counter';
import './Card.css';

const Card = ({ name, rating, ingredients }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Name: {name}</h2>
        <Counter />
      </div>
      <p>Rating: {rating}</p>
      <p>Ingredients: {ingredients}</p>
    </div>
  );
};

export default Card;
