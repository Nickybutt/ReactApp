import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();

    this.state = {
      term: 0
    };
  }

  onChangeTerm(term) {
    this.setState({ term });
    this.props.changeTerm(term);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.alert}>klik mij</button>
        <br />
      </div>
    );
  }
}

export default Button;
