import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Query from "./Query";
import { trackPromise } from "react-promise-tracker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInitialMessage: false,
      latlong: "",
      venues: [],
    };
  }

  componentDidMount() {
    this.setState({
      showInitialMessage: true,
    });
    this.getLocation();
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((response) => {
      this.setState({
        latlong: response.coords.latitude + "," + response.coords.longitude,
      });
    });
  };

  getVenues = (query) => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "CS1DCR3PAJITL25EF3FJHAZB5LE1OD5PADOGFYUF5IQM0XO0",
      client_secret: "VRLSN051WJVNKM1K1RR0T5RKZQO52MFLLRCXPLMFLKHYTLU5",
      ll: this.state.latlong,
      query: query,
      v: "20200522",
      limit: "9",
      sortByDistance: "1",
    };
    trackPromise(
      Axios.get(endPoint + new URLSearchParams(params)).then((response) => {
        this.setState({
          showInitialMessage: false,
          venues: response.data.response.groups[0].items,
        });
      })
    );
  };

  render() {
    const text = this.state.showInitialMessage ? (
      <h2 className="beforeResultsText">You can find results here...</h2>
    ) : (
      this.getVenues
    );
    return (
      <div>
        <Query getVenues={this.getVenues} />
        <h1>{text}</h1>
        <ul className="list">
          {this.state.venues.map((venue) => {
            return (
              <div className="card">
                <li className="card--title" key={venue.venue.name}>
                  {venue.venue.name}
                </li>
                <hr></hr>
                <li>
                  Address{" "}
                  <span className="card-adress">
                    {venue.venue.location.address}{" "}
                  </span>
                </li>
                <li>
                  Distance{" "}
                  <span className="card-distance">
                    {venue.venue.location.distance} meter
                  </span>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
