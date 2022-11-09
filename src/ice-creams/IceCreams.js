import React from 'react';
import './IceCreams.css';
import Card from '../card/Card';

const IceCreams = ({ iceCreams }) => {
  const searchedIceCreams = iceCreams.map((flavor) => {
    return (
      <Card
        key={flavor.key}
        id={flavor.key}
        name={flavor.name}
        rating={flavor.rating}
        ingredients={flavor.ingredients}
      />
    );
  });

  return <div className="container">{searchedIceCreams}</div>;
};

export default IceCreams;
