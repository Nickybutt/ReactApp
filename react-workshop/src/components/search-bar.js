import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = { search: "" };
  }

  onChangeSearch(search) {
    this.setState({ search });
    this.props.changeSearch(search);
  }

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          placeholder="search"
          onChange={event => this.onChangeSearch(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
