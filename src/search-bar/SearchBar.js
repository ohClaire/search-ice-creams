import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(this.state.input);
          this.clearInput();
        }}
      >
        <label htmlFor="search"></label>
        <input
          value={this.state.input}
          className="search-input"
          type="text"
          placeholder="Search for flavors here"
          onChange={this.handleChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
        <div>
          <label htmlFor="sortRatings">Sort: </label>
          <select
            name="sorting"
            id="sortRatings"
            onChange={(event) => this.props.handleSort(event.target.value)}
          >
            <option value="Alphabetical order">Alphabetical order</option>
            <option value="Highest-Lowest Ratings">
              Highest-Lowest Ratings
            </option>
            <option value="Lowest-Highest Ratings">
              Lowest-Highest Ratings
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="filters">Filter: </label>
          <select
            name="filters"
            id="filters"
            onChange={(event) => this.props.handleFilter(event.target.value)}
          >
            <option value="Show all">Show all</option>
            <option value="4+">4+</option>
            <option value="3+">3+</option>
            <option value="2+">2+</option>
            <option value="1+">1+</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
