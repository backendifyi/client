import React from 'react'
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/Backendifyi.png"

import "./NavBar.css"


const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: "240px", height: "50px" }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="nav-item"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              href="#link"
            >
              Features
            </Nav.Link>
            {/* <Nav.Link
              className="nav-item"
              href="#link"
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              href="#link"
            >
              Documentation
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar