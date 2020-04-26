import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <div className="container">
    <Home />
    <h1>Hello world!!</h1>
    <p>This is app with webpack and babel</p>
    <p>This is app with webpack and babel</p>
  </div>
);

export default App;
