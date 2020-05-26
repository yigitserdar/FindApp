import React, { Component } from "react";
import "./App.css";

class Query extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      elements: document.getElementsByClassName("list"),
      i: "",
    };
  }

  newSearcher = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  listView = () => {
    for (
      this.state.i = 0;
      this.state.i < this.state.elements.length;
      this.state.i++
    ) {
      this.state.elements[this.state.i].style.display = "block";
    }
  };

  gridView = () => {
    for (
      this.state.i = 0;
      this.state.i < this.state.elements.length;
      this.state.i++
    ) {
      this.state.elements[this.state.i].style.display = "grid";
    }
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
          <div>
            <button className="btn" type="submit" onClick={this.gridView}>
              <i className="fa fa-th-large"></i>
              Grid
            </button>
            <button className="btn" type="submit" onClick={this.listView}>
              <i className="fa fa-bars"></i>
              List
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Query;
