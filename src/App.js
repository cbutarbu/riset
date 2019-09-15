
import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import SunForm from "./Components/SunForm";
import MoonForm from "./Components/MoonForm";
import Riset from "./Components/Riset";


const API_KEY_SUNSET_SUNRISE =  "a453161185ff4ed4aace0896829d1561";
const API_KEY_LOCATION = "OHOdqfMisrcnQKDl6lQNGcgPGGLMmMB7";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      city: "",
      state: "",
      latitude: 0,
      longitude: 0,
      sunrise: "",
      sunset: "",
      moonrise: "",
      moonset: ""
    }
  }
  /**
   * Gets location inputted by user and get sunrise and sunset times
   */
  getLocation = async(place) => {
    place.preventDefault();
    const city = place.target.elements.city.value;
    const state = place.target.elements.state.value;

    // Retrieve Data for coordinates
    const api_call = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY_LOCATION}&inFormat=kvp&outFormat=json&location=${city}%2C+${state}&thumbMaps=false`);
    const data = await api_call.json();

    // Retrieve data for sunsrise/sunset types
    const latitude = data.results[0].locations[0].latLng.lat;
    const longitude = data.results[0].locations[0].latLng.lng;
    const api_call_2 = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY_SUNSET_SUNRISE}&lat=${latitude}&long=${longitude}`);
    const riset = await api_call_2.json();

    //Set state with new information
    this.setState({
      city: data.results[0].locations[0].adminArea5,
      state: data.results[0].locations[0].adminArea3,
      latitude: data.results[0].locations[0].latLng.lat,
      longitude: data.results[0].locations[0].latLng.lng,
      sunrise: riset.sunrise,
      sunset: riset.sunset,
      moonrise: riset.moonrise,
      moonset: riset.moonset
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">

                <div className="row">
                  <div className="col-xs-12 title-container">
                    <Titles />
                  </div>
                </div>

              <div className="row">
                <div className="col-xs-12 form-container">
                  <Form getLocation={this.getLocation}/>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 data-container sunrise-container">
                  <Riset
                    displaySunrise = {true}
                    displaySunset = {false}
                    displayMoonrise = {false}
                    displayMoonset = {false}
                    city = {this.state.city}
                    state = {this.state.state}
                    latitude = {this.state.latitude}
                    longitude = {this.state.longitude}
                    sunrise = {this.state.sunrise}
                    sunset = {this.state.sunset}
                    moonrise = {this.state.moonrise}
                    moonset = {this.state.moonset}
                  />
                </div>


                <div className="col-xs-6 data-container sunset-container">
                  <Riset
                    displaySunrise = {false}
                    displaySunset = {true}
                    displayMoonrise = {false}
                    displayMoonset = {false}
                    city = {this.state.city}
                    state = {this.state.state}
                    latitude = {this.state.latitude}
                    longitude = {this.state.longitude}
                    sunrise = {this.state.sunrise}
                    sunset = {this.state.sunset}
                    moonrise = {this.state.moonrise}
                    moonset = {this.state.moonset}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 data-container moonrise-container">
                  <Riset
                    displaySunrise = {false}
                    displaySunset = {false}
                    displayMoonrise = {true}
                    displayMoonset = {false}
                    city = {this.state.city}
                    state = {this.state.state}
                    latitude = {this.state.latitude}
                    longitude = {this.state.longitude}
                    sunrise = {this.state.sunrise}
                    sunset = {this.state.sunset}
                    moonrise = {this.state.moonrise}
                    moonset = {this.state.moonset}
                  />
                </div>


                <div className="col-xs-6 data-container moonset-container">
                  <Riset
                    displaySunrise = {false}
                    displaySunset = {false}
                    displayMoonrise = {false}
                    displayMoonset = {true}
                    city = {this.state.city}
                    state = {this.state.state}
                    latitude = {this.state.latitude}
                    longitude = {this.state.longitude}
                    sunrise = {this.state.sunrise}
                    sunset = {this.state.sunset}
                    moonrise = {this.state.moonrise}
                    moonset = {this.state.moonset}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
