import React from 'react'
import { Button, Form, Card, Row, Col } from "react-bootstrap";

import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>
      <Card className="bg-transparent card">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <h4>
                Stay in the loop with our News and Updates. Join our Newsletter Now!
              </h4>
            </Form.Label>
            <Row>
              <Col xl={8} lg={8} md={8} sm={12}>
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-md submit"
                  href="/"
                >
                  Submit
                </button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Card>
    </>
  );
}

export default Newsletter