import React, { Component } from "react";

class TestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchTitle: this.props.search
    };
  }

  changeTitle = event => {
    this.setState({
      SearchTitle: event.target.value
    });
  };

  setTitle = title => {
    console.log(title);
  };

  render() {
    return (
      <div className="form-group">
        <button onClick={() => this.setTitle(this.state.SearchTitle)}>
          click
        </button>
        <input type="text" placeholder="search" onChange={this.changeTitle} />
      </div>
    );
  }
}

export default TestForm;
