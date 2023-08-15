import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <center>
          <h6 className="text-muted" style={{ color: "#1F1244" }}>
            Copyright © 2023 Backendifyi
          </h6>
        </center>
      </footer>
    </>
  );
}

export default Footer