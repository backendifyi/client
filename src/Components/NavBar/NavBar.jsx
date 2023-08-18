import React, { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/Backendifyi.png"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import "./NavBar.css"


const NavBar = () => {
    const [isAuth, setisAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("btoken");
      if (token && token !== null) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        axios
          .get(
            `${process.env.REACT_APP_API_ACTIVE_URL}/api/client/auth/page/`,
            config
          )
          .then((response) => {
            if (response.status === 200) {
              setisAuth(true);
            }
          });
      }
    }, [isAuth]);

    const handleClick = () => {
      localStorage.removeItem("btoken");
      navigate("/");
    };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ width: "240px", height: "50px" }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link
              className="nav-item"
              href="#home"
            >
              Home
            </Nav.Link> */}
            {isAuth == true ? (
              <>
                <Nav.Link className="nav-item" onClick={() => handleClick()}>
                  <Button variant="danger">Logout</Button>
                </Nav.Link>
              </>
            ) : (
              <></>
            )}
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