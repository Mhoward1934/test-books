import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link className="mr-auto">
              <Link.Link href="#home">Home</Link.Link>
              <Link.Link href="#link">Link</Link.Link>
            </Link>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  }
}

export default Navbar;