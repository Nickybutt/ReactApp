import React, { Component } from 'react';


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


class App extends Component {
  render() {
    return (
      <div>
        Title: list.title

        </div>
    );
  }
}

export default App;
