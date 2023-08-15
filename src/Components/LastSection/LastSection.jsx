import React from 'react'
import { Row, Col, Button } from "react-bootstrap"
import LastSectionImg from "../../assets/lastSection.png"

import "./LastSection.css"


const LastSection = () => {
  return (
    <>
      <Row>
        <Col xl={2} sm={12} xs={12}></Col>
        <Col xl={4}>
          <p className="lsSubtitle">Get started today</p>
          <div className="lstitle">Start Building with</div>
          <div className="lstitle">Backendifyi for free</div>
          <br />
          <Button className="lsButton">Start Now</Button>
        </Col>
        <Col xl={4} sm={12} xs={12}>
          <center>
            <img src={LastSectionImg} alt="" className="lsImg" />
          </center>
        </Col>
        <Col xl={2}></Col>
      </Row>
    </>
  );
}

export default LastSection