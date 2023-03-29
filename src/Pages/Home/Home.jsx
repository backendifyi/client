import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import rocket from "../../assets/rocket.png";
import charmRocket from "../../assets/charm_rocket.png";
import announcement from "../../assets/announcement.png"
import play from "../../assets/bi_play-fill.png";
import mouse from "../../assets/bi_mouse.png";

import "./Home.css";

import NavBar from "../../Components/NavBar/NavBar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-body">
        <NavBar />
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="text">
                <h1 className="title" style={{ fontSize: "50px" }}>
                  Simplify Your Backend,
                  <br />
                  Amplify Your Application <br />
                </h1>
                <p className="subtitle">
                  Streamline your backend development with easy-to-use APIs and
                  a dashboard for managing data.
                </p>
                <div className="button">
                  <Button
                    type="button"
                    className="btn btn-outline-danger btn-lg"
                    href="/"
                  >
                    {/* <img src={announcement} style={{ height: "30px" }} alt="" /> */}
                    Launching Soon
                  </Button>
                  {/* <button
                    type="button"
                    className="btn btn-outline-danger btn-lg"
                    href="/documentation"
                  >
                    <img src={charmRocket} style={{ height: "30px" }} alt="" />
                    Get Started
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg"
                  >
                    <img
                      src={play}
                      style={{ height: "30px" }}
                      className=""
                      alt=""
                    />
                    How it Works
                  </button> */}
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <center>
                <img className="main-rocket" src={rocket} alt="" />
              </center>
            </Col>
          </Row>
          <br />
          <Newsletter className="footer" />
        </Container>
        <br />
        {/* <Footer /> */}
      </div>
      
    </>
  );
};

export default Home;
