import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, redirect } from "react-router-dom";
import { Container, Col, Row, Card, Button } from "react-bootstrap"
import { FcFlashOn } from "react-icons/fc";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import withAuth from '../../../utils/withAuth';

import './Emailbox.css'
import UpdateName from '../../Components/UpdateName';
import UpdateAPI from '../../Components/UpdateAPI';
import EmailboxData from '../../Components/EmailboxData';

import NavBar from '../../../Components/NavBar/NavBar';

const Emailbox = () => {
  const { state } = useLocation()
  console.log(state.projectId)
  const navigate = useNavigate();
  const [loadPage, setLoadPage] = useState(false);
  
  useEffect(() => {
    const { allowPage } = state || {}; // Access the parameter from state
    if (!allowPage) {
      console.log("return");
      return navigate("/dashboard");
    } else {
      setLoadPage(true);
    }
  },[state, navigate, loadPage])
  
  
  return (
    <>
      <NavBar />
      {loadPage === true ? (
        <>
          <Container>
            <Button href="/dashboard">
              <BsFillArrowLeftCircleFill /> &nbsp; Dashboard
            </Button>
            <div className="emailboxDiv">
              <Card className="manageCard">
                <Card.Title className="cardTitle"> Manage Emailbox</Card.Title>
                <Card.Body>
                  <Row>
                    <Col xl={4} lg={4} md={12} sm={12}>
                      <UpdateName />
                    </Col>
                    <Col>
                      <UpdateAPI />
                    </Col>
                  </Row>
                  <br />
                  <br />
                </Card.Body>
              </Card>
            </div>
            <div className="emailboxDiv">
              <Card className="manageCard">
                <Card.Title className="cardTitle">
                  <Row>
                    <Col xl={4} lg={4} md={12} sm={6} xs={6}>
                      EmailBox Data
                    </Col>
                    <Col
                      xl={6}
                      lg={6}
                      md={12}
                      sm={0}
                      xs={0}
                      className="blankCol"
                    ></Col>
                    <br />
                    <Col xl={2} lg={2} md={12} sm={6} xs={6}>
                      <Button
                        onClick={() =>
                          navigate("/emailbox/csv", {
                            state: { 
                              allowPage: true,
                              projectId: state.projectId
                              },
                          })
                        }
                      >
                        Get CSV <FcFlashOn />
                      </Button>
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Body>
                  <EmailboxData />
                </Card.Body>
              </Card>
            </div>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default withAuth(Emailbox)