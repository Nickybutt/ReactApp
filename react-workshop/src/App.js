import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import NewsList from './components/news-list';
import './App.css';


class App extends Component {
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
    );
  }
}

export default App;
