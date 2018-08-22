import React, { Component } from "react";

class SearchBarSubject extends Component {
  render() {
    const { SearchSubject, changeSubject } = this.props;
    return (
      <div className="form-group">
        <input
          type="text"
          placeholder="search"
          value={SearchSubject}
          onChange={event => changeSubject(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBarSubject;
