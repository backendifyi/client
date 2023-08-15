import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import "./Working.css"

const Working = () => {
  return (
    <>
      <Row>
        <center>
          <div className="workingCardTitle">Our Simple 3-Step Process</div>
        </center>

        <Col
          xxl={4}
          xl={4}
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="workingCardCol"
        >
          <Card>
            <Card.Title className="workingTitle">
              <Row>
                <span className="circleW">{1}</span> &nbsp; Get Started Quickly
              </Row>
            </Card.Title>
            <Card.Body className="workingCardBody">
              Sign up or log in to Backendifyi, and within minutes, create your
              first project. No need to worry about setting up servers or
              databases – we've got you covered!
            </Card.Body>
          </Card>
        </Col>
        <Col
          xxl={4}
          xl={4}
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="workingCardCol"
        >
          <Card>
            <Card.Title className="workingTitle">
              <Row>
                <span className="circleW">{2}</span> &nbsp; Seamless Integration
              </Row>
            </Card.Title>
            <Card.Body className="workingCardBody">
              Copy the API provided by Backendifyi and implement it into your
              frontend application. Connect effortlessly with our backend
              services, enabling smooth data communication.
            </Card.Body>
          </Card>
        </Col>
        <Col
          xxl={4}
          xl={4}
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="workingCardCol"
        >
          <Card>
            <Card.Title className="workingTitle">
              <Row>
                <span className="circleW">{3}</span> &nbsp; Data at Your
                Fingertip
              </Row>
            </Card.Title>
            <Card.Body className="workingCardBody">
              Receive your data from the backend and get it displayed on
              dashboard. Take advantage of our features to analyze and interact
              more. Download data in CSV format with just a click!
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Working