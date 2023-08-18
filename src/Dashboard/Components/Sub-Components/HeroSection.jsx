import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Spinner
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import "../Content.css";
import mailbox from "../../../assets/undraw_mailbox_re_dvds.svg";

const HeroSection = () => {
  const [project, setProject] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setProject(event.target.value);
  };

  const handleSubmit = (async() => {
    if( project == null || project == undefined ){
      toast.warning("Please Enter EmailBox Name")
      return
    }
    setLoading(true);
    const token = localStorage.getItem("btoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      "project_name": project,
    };

    axios
      .post(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/`,
        data,
        config
      )
      .then((response) => {
        const project_id = response.data.project_id;
        setLoading(false);
        navigate("/emailbox", {
          state: {
            allowPage: true,
            projectId: project_id,
          },
        });
      })
      .catch(error => {
        setLoading(false);
        if(error.response.status === 406){
          toast.warning("You have exceeded your Limit!");
        }
        else if(error.response.status === 409){
          toast.warning("You have an existing emailbox with the same name!");
        }
        else{
          toast.warning("We are facing some server issues :(");
        }
        
      })
  })
  return (
    <>
      <Card className="heroCard">
        <Card.Body>
          <Row>
            <Col xl={3} lg={3} md={12} sm={12}>
              <center>
                <img src={mailbox} className="mailbox" alt="My SVG" />
              </center>
            </Col>
            <Col xl={9} lg={9} md={12} sm={12}>
              <Card className="rightHeroCard">
                <Card.Title className="heroTitle">EmailBox</Card.Title>
                <Card.Text className="heroText">
                  Streamline your Customer Communication and Business Leads by
                  Capturing and Managing Email Addresses Effortlessly.
                </Card.Text>
                <Card.Text className="heroText">
                  Easy Integration | Quick Reply | Filtering | Analysis |
                  Download Data
                </Card.Text>
                <Form>
                  <Row>
                    <Col xl={6} lg={6} md={12} sm={12}>
                      <Form.Group controlId="formTextField">
                        <Form.Control
                          type="text"
                          onChange={handleInputChange}
                          placeholder="Enter Project Name (EmailBox Name)"
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group>
                        {loading === false ? (
                          <Button
                            className="heroFormButton"
                            type="button"
                            variant="dark"
                            onClick={handleSubmit}
                          >
                            Create EmailBox
                          </Button>
                        ) : (
                          <Button
                            className="heroFormButton"
                            type="button"
                            variant="dark"
                          >
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            &nbsp; Creating ...
                          </Button>
                        )}
                       
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <ToastContainer />
    </>
  );
}

export default HeroSection