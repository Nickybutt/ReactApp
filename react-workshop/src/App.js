import React, { Component } from "react";

import ContactList from "./components/news";

class App extends Component {
  render() {
    return (
      <div className="page">
        <h1>List of contacts</h1>
        <ContactList list={this.props.list} />
      </div>
    );
  }
}

export default App;
