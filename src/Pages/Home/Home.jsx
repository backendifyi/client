import GoogleAuth from "../../Pages/Authentication/GoogleAuth";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { TbRocket } from "react-icons/tb";

import rocket from "../../assets/rocket.png";
import charmRocket from "../../assets/charm_rocket.png";
// import announcement from "../../assets/announcement.png"
// import play from "../../assets/bi_play-fill.png";
// import mouse from "../../assets/bi_mouse.png";

import "./Home.css";

import NavBar from "../../Components/NavBar/NavBar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Features from "../../Components/Features/Features";
import Working from "../../Components/Working/Working";
import Video from "../../Components/Video/Video";
import Products from "../../Components/Products/Products";
import LastSection from "../../Components/LastSection/LastSection";
import Footer from "../../Components/Footer/Footer";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [isAuth, setisAuth] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(process.env.REACT_APP_API_ACTIVE_URL, "TEST URL");
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
  return (
    <>
      <div className="home-body">
        <NavBar />
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="text">
                <h1 className="title">
                  Simplify Your Backend,
                  <br />
                  Amplify Your Application <br />
                </h1>
                <div className="homeSubtitle">
                  <p>
                    Streamline your backend development with easy-to-use APIs
                    and a dashboard for managing data.
                  </p>
                </div>
                {/* <div className="button">
                  <Col>
                      <Button
                        type="button"
                        className="btn btn-outline-danger btn-lg"
                        href="/"
                      >
                   
                        Launching Soon
                      </Button>
                    </Col>
                  

                  <button
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
                      // src={play}
                      style={{ height: "30px" }}
                      className=""
                      alt=""
                    />
                    How it Works
                  </button>
                </div> */}
                {isAuth === true ? (
                  <>
                    <div className="button">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-lg"
                        onClick={() => navigate("/dashboard")}
                      >
                        <img
                          src={charmRocket}
                          style={{ height: "30px" }}
                          alt=""
                        />
                        Get Started
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="button">
                      <GoogleAuth />
                    </div>
                  </>
                )}
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12}>
              <center>
                <img className="main-rocket" src={rocket} alt="" />
              </center>
            </Col>
          </Row>
          <br />
          <Working />
          <br /> <br />
          <Features />
          <br />
          <br />
          <Products />
          <br />
          <br />
          <Video />
          <br />
          <br />
          <LastSection />
          <br />
          <br />
          <Newsletter className="footer" />
        </Container>
        <br />
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Home;
