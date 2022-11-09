import './App.css';
import React, { useState } from 'react';
import Data from './Data.json';

// Import Components
import SearchBar from './search-bar/SearchBar';
import IceCreams from './ice-creams/IceCreams';

const App = () => {
  const [flavor, setFlavor] = useState('');
  const [sortType, setSortType] = useState('Alphabetical order');
  const [filterType, setFilterType] = useState('Show all');

  const handleSubmit = (input) => {
    setFlavor(input);
  };

  const searchedIceCreams = Data.filter((iceCream) => {
    // filter for the search text then filter for the rating type
    return iceCream.name.toLowerCase().includes(flavor);
  })
    .filter((iceCream) => {
      if (filterType === 'Show all') {
        return true;
      } else if (filterType === '4+') {
        return iceCream.rating >= 4.0;
      } else if (filterType === '3+') {
        return iceCream.rating >= 3.0;
      } else if (filterType === '2+') {
        return iceCream.rating >= 2.0;
      } else {
        return iceCream.rating >= 1.0;
      }
    })
    .sort((first, last) => {
      if (sortType === 'Alphabetical order') {
        return first.name.toLowerCase() > last.name.toLowerCase() ? 1 : -1;
      } else if (sortType === 'Highest-Lowest Ratings') {
        return last.rating - first.rating;
      } else if (sortType === 'Lowest-Highest Ratings') {
        return first.rating - last.rating;
      } else {
        throw new Error(`This ${sortType} is not valid. Please try again.`);
      }
    });

  const searchCount = searchedIceCreams.length;

  return (
    <div className="App">
      <h1>Find Your Ice Cream Flavor! 🍦🍦🍦</h1>
      <div className="inputs-container">
        <SearchBar
          handleSubmit={handleSubmit}
          handleFilter={setFilterType}
          handleSort={setSortType}
        />
      </div>
      <div>
        <h2 className="result">
          Showing {searchCount} for '{flavor}':
        </h2>
        <IceCreams iceCreams={searchedIceCreams} />
      </div>
    </div>
  );
};

export default App;
