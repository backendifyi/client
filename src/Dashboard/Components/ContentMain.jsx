import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import "./Content.css";

import HeroSection from './Sub-Components/HeroSection';
import ManageSection from './Sub-Components/ManageSection';
import MiniEmailboxData from './Sub-Components/MiniEmailboxData';

const ContentMain = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Row>
          <Col>
            <HeroSection />
          </Col>
        </Row>
        <div className="bottomSection">
          <Row>
            <Col xl={3} lg={3} md={12} sm={12}>
              <ManageSection />
              <br />
              
            </Col>
            <Col xl={9} lg={9} md={12} sm={12}>
              <MiniEmailboxData />
            </Col>
          </Row>
        </div>
        <br />
      </Container>
    </>
  );
}

export default ContentMain