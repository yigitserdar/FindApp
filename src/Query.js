import React, { Component } from "react";

export default class Query extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="search" placeholder="Search in exp: pub"></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
