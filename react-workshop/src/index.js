import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

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
    title: "sketch",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 2
  },
  {
    title: "Javascript",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 3
  }
];

ReactDOM.render(<App list={list} />, document.getElementById("root"));
