import React from "react"

class Riset extends React.Component {
  render() {
      var dataTitle = "";
      var data = "";

      if(this.props.displaySunrise === true) {
        dataTitle = "Sunrise: ";
        data = this.props.sunrise;
      }

      else if (this.props.displaySunset === true) {
        dataTitle = "Sunset: ";
        data = this.props.sunset;
      }

      else if (this.props.displayMoonrise === true) {
        dataTitle = "Moonrise: ";
        data = this.props.moonrise;
      }

      else if (this.props.displayMoonset === true) {
        dataTitle = "Moonset: ";
        data = this.props.moonset;
      }

    return (
      <div className="riset__info">
        {// Display sunrise and sunset


        //{(this.props.sunset === "") ? null : <p className="riset__key"> Sunset: {this.props.sunset} </p>}
        //{(this.props.sunrise === "") ? null : <p className="riset__key"> Sunrise: {this.props.sunrise} </p>}
        //{(this.props.moonset === "") ? null : <p className="riset__key"> Moonset: {this.props.moonset} </p>}
        //{(this.props.moonrise === "") ? null : <p className="riset__key"> Moonrise: {this.props.moonrise} </p>}
      }
        <p className="riset__key"> {dataTitle + data} </p>


      </div>
    )
  }
}

export default Riset;
