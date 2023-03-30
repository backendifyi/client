import React from 'react'
import { useState } from "react";
import axios from "axios";


import { Button, Form, Card, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";


import "./Newsletter.css"
import "react-toastify/dist/ReactToastify.css";


const Newsletter = () => {
  const [email, setEmail] = useState("");

   const handleChange = (e) => {
     setEmail({
       ...email,
       [e.target.name]: e.target.value.trim(),
     });
   };

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email["email"])
    if (email["email"].length === 0) {
      toast.warn("Please enter an Email Address", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } 
    else{
      const data = {
        email: email["email"],
      };
      axios
        .post(`${process.env.API_URL}/api/newsletter/`, data)
        .then((response) => {
          console.log(response.status);
          var status = response.status;
          if (status === 201) {
            console.log("in toast");
            toast.success("Awesome! You're in for some amazing content.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((error) => {
          var status = error.request.status;
          console.log(status);
          if (status === 409) {
            toast.warning(
              "Oops! Looks like you're already subscribed with that email.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );
          } else {
            console.log("incrr ");
            toast.error(
              "That seems to be an incorrect email. Please check once.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );
          }
        });
      };

   }
  return (
    <>
      <Card className="bg-transparent card">
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
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <button
                  type="submit"
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