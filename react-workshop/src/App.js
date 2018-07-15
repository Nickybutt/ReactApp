import React, { Component } from 'react';
import SearchBar from './components/search-bar';

import Data from './data/data.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { newsFeed: []};

    const list = [
      {
      title: "react",
      url: 'https://github.com/Nickybutt/ReactApp/pull/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }, ];

    console.log(list);

  }
  render() {
    return (
      <div>
        <SearchBar />
        <button >dismiss</button>      
        </div>
    );
  }
}

export default App;
