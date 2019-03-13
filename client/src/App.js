import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Searchbar from "./components/searchbar/searchbar";
import './App.css';
import Home from "./components/home/home";
import Results from "./components/results/results"

class App extends Component {
  render() {
    return (

      <Router>
        <div className="text-center">
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
          <Searchbar />
          <Results />
        </div>
      </Router>
    );
  }
}

export default App;
