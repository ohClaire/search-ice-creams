import './App.css';
import React, { useState } from 'react';
import Data from './Data.json';

// Import Components
import SearchBar from './search-bar/SearchBar';
import IceCreams from './ice-creams/IceCreams';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       iceCreams: Data,
//       flavor: 'chocolate',
//     };
//   }

//   handleSubmit = (input) => {
//     this.setState({ flavor: input });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Find Your Ice Cream Flavor! 🍦🍦🍦</h1>
//         <div className="inputs-container">
//           <SearchBar handleSubmit={this.handleSubmit} />
//           <Filter />
//         </div>
//         <div>
//           <h2>Searched for '{this.state.flavor}' found: </h2>
//           <IceCreams
//             iceCreams={this.state.iceCreams}
//             flavor={this.state.flavor}
//           />
//         </div>
//       </div>
//     );
//   }
// }

const App = () => {
  const [iceCreams, setIceCreams] = useState(Data);
  const [flavor, setFlavor] = useState('');
  const [sortType, setSortType] = useState('Alphabetical order');
  const [filterType, setFilterType] = useState('Show all');

  const handleSubmit = (input) => {
    setFlavor(input);
  };

  const searchedIceCreams = iceCreams
    .filter((iceCream) => {
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
        <h2>
          Showing {searchCount} for '{flavor}':
        </h2>
        <IceCreams iceCreams={searchedIceCreams} />
      </div>
    </div>
  );
};

export default App;
