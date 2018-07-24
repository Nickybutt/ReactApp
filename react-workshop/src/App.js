<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import NewsList from './components/news-list';
import './App.css';
>>>>>>> 3954834b3cb6f1142225fb0a67e0853b3080d5c3

import ContactList from "./components/news";

class App extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="page">
        <h1>List of contacts</h1>
        <ContactList list={this.props.list} />
      </div>
=======
  constructor(props) {
    super(props);

    this.state = { newsFeed: []};


  }
  render() {
    return (
      <div>
        <SearchBar />
        <NewsList />
     
        </div>
>>>>>>> 3954834b3cb6f1142225fb0a67e0853b3080d5c3
    );
  }
}

export default App;
