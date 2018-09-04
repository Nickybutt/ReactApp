import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { search, changeSearch } = this.props;
    return (
      <div className="form-group">
        <input
          type="text"
          placeholder="filterSearch"
          value={search}
          onChange={event => changeSearch(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
