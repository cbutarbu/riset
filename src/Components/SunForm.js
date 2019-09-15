import React from "react"

class SunForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getLocation}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="state" placeholder="State"/>
        <button>Generate Results!</button>
      </form>
    );
  }
}

export default SunForm;
