import React, { Component } from "react";

import NewsList from "./components/news";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page">
        <h1>News list</h1>
        <NewsList />
      </div>
    );
  }
}

export default App;
