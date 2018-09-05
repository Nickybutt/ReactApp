import React, { Component } from "react";

class Sum extends Component {
  state = {
    counter: 0
  };

  change(x) {
    return x * 10;
  }

  render() {
    return (
      <div>
        <h1>{counter}</h1>
      </div>
    );
  }
}

export default Sum;
