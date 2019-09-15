import React from "react"

class MoonForm extends React.Component {
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

export default MoonForm;
