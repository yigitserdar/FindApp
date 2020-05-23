import React, { Component } from "react";

class Query extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
    };
  }

  newSearcher = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <input
          className="input"
          onChange={this.newSearcher}
          type="text"
          placeholder="Exp: pub"
          name="searchInput"
          id="searchInput"
        />
        <div className="button-div">
          <button
            className="button"
            onClick={this.props.getVenues.bind(null, this.state.searchInput)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
export default Query;
