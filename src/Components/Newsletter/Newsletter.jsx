import React from 'react'
import { useState } from "react";
import axios from "axios";


import { Button, Form, Card, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";


import "./Newsletter.css"
import "react-toastify/dist/ReactToastify.css";


const Newsletter = () => {
  const [email, setEmail] = useState();
   const handleChange = (event) => {
     setEmail(event.target.value);
   };

   const handleSubmit = (e) => {
     if (email == null || email == undefined) {
       alert("Please Enter an Email Address");
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
       email,
     };
     console.log(data, config);
     axios
       .post(
         `https://api.backendifyi.vercel.app/api/emailbox/addEmail/`,
         data,
         config
       )
       .then((response) => {
         console.log(response);
         alert("Subscription Added Successfully!");
       })
       .catch((error) => {
        console.log(error.response)
       })
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