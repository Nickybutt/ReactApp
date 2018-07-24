import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>klik mij</button>;
  }
}

export default Button;
