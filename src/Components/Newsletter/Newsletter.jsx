import React from 'react'
import { useState } from "react";
import axios from "axios";


import { Button, Form, Card, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";


import "./Newsletter.css"
import "react-toastify/dist/ReactToastify.css";


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const validateEmail = (email) => {
    // Regular expression pattern for matching email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    if (email === "" || email === null || email === undefined) {
      toast.warn("Please enter an Email Address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmail("");
      return;
    }
    if (!validateEmail(email)) {
      toast.warn("Please enter a Valid Email Address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmail("");
      return;
    }
    const token = `${process.env.REACT_APP_BACKENDIFYI}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIKey ${token}`,
      },
    };
    const data = {
      email: email,
    };
    // console.log(data, config);
    axios
      .post(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/addEmail/`,
        data,
        config
      )
      .then((response) => {
        toast.success("Subscription Added Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail("");
      })
      .catch((error) => {
        if (error.response.status === 403) {
          toast.error("Too many requests, please try after some time!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setEmail("");
        } else {
          toast.error("We face some issue, please try after some time!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setEmail("");
        }
      });
  };
  return (
    <>
      <Card className="bg-transparent newsletter-card">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <h4>
                Stay in the loop with our News and Updates. Join our Newsletter
                Now!
              </h4>
            </Form.Label>
            <Row>
              <Col xl={8} lg={8} md={8} sm={12}>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-md submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Newsletter