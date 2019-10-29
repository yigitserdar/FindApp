import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Query from "./Query";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latlong: "",
      venues: []
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(response => {
      this.setState(
        {
          latlong: response.coords.latitude + "," + response.coords.longitude
        },
        () => {
          this.getVenues("");
        }
      );
    });
  };

  getVenues = query => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "CS1DCR3PAJITL25EF3FJHAZB5LE1OD5PADOGFYUF5IQM0XO0",
      client_secret: "VRLSN051WJVNKM1K1RR0T5RKZQO52MFLLRCXPLMFLKHYTLU5",
      ll: this.state.latlong,
      query: query,
      v: "20192810",
      limit: "10",
      sortByDistance: "1"
    };
    Axios.get(endPoint + new URLSearchParams(params)).then(response => {
      this.setState({ venues: response.data.response.groups[0].items });
    });
  };

  render() {
    return (
      <div>
        <Query getVenues={this.getVenues} />
        <ul>
          {this.state.venues.map(venue => {
            return (
              <li key={venue.venue.name}>
                {venue.venue.name} Address: {venue.venue.location.address}{" "}
                Distance: {venue.venue.location.distance} meter Category:{" "}
                {venue.venue.categories[0].name}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
