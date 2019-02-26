import React, { Component } from 'react';
import "./App.css";
import Navbar from "/src/components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-Bootstrap/Navbar";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </header>
        </div>
        <Route path="/" exact component={Navbar} />
        </Router>
    );
  }
}

export default App;
