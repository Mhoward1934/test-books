import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>(React) Google Books Search</h1>
        </header>
      </div>
    );
  }
}

export default App;
