import React, { Component } from "react";

class Query extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ""
    };
  }

  newSearcher = event => {
    this.setState({ searchInput: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.newSearcher}
          type="text"
          placeholder="Search"
          name="searchInput"
          id="searchInput"
        />
        <button
          onClick={this.props.getVenues.bind(null, this.state.searchInput)}
        >
          Search
        </button>
      </div>
    );
  }
}
export default Query;
