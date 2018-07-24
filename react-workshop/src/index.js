<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
>>>>>>> 3954834b3cb6f1142225fb0a67e0853b3080d5c3

import App from "./App";

const list = [
  {
    title: "react",
    url: "https://github.com/Nickybutt/ReactApp/pull/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 2
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 3
  }
];

ReactDOM.render(<App list={list} />, document.getElementById("root"));
