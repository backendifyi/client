import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("btoken");
        navigate("/");
        
    }
  return (
    <>
      <Container>
        <center>
          <Card className="manageCard">
            <Card.Title className="cardTitle">
              Do you really want to Logout?
            </Card.Title>
            <Card.Body className="cardText">
              <Button onClick={() => handleClick()}>Yes, Logout</Button>
            </Card.Body>
          </Card>
        </center>
      </Container>
    </>
  );
}

export default Logout