import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Col, Row, Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import axios from 'axios';

import NavBar from '../../Components/NavBar/NavBar';
import "./Instant.css";


const Instant = () => {
  const { state } = useLocation();
  const navigate = useNavigate()

  const [subject, setSubject] = useState();
  const [body, setBody] = useState();
  const [ emailId, setEmailId] = useState()
  const [email, setEmail] = useState();
  const [projectId, setProjectId] = useState();
  const [canReply, setCanReply] = useState(0)

  useEffect(() => {
    if(!(state.allowPage)) return navigate("/dashboard")
    setEmailId(state.emailId)
    setEmail(state.email)
    setProjectId(state.projectId)
    const token = localStorage.getItem("btoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/instantReply/?emailId=${emailId}`,
        config
      )

      .then(() => {
        setCanReply(1);
      })
      .catch((e) => {
        const data = e.response.data;
        setSubject(data["subject"]);
        setBody(data["body"]);
        setCanReply(0);
      });
  })

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    toast.success("Email Sent Succesfully");
    const emailData = {
      "emailId": emailId,
      "subject": subject,
      "body": body,
    };
    const token = localStorage.getItem("btoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    // Make the API call using fetch or Axios
    axios
      .post(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/instantReply/`,
        emailData,
        config
      )
      .then((response) => {
        if (response.status == 201) {
          // toast.success("Email Sent Succesfully");
          navigate("/emailbox", {
            state: {
              allowPage: true,
              projectId: projectId,
            },
          });
        }
      });
      
  };

  return (
    <>
      <NavBar />
      <Container>
        <Button
          onClick={() =>
            navigate("/emailbox", {
              state: { 
                allowPage:true,
                projectId: projectId 
              },
            })
          }
        >
          <BsFillArrowLeftCircleFill /> &nbsp; EmailBox
        </Button>
      </Container>
      {canReply === 1 ? (
        <>
          <Container className="emailboxDiv">
            <Card className="manageCard">
              <Card.Title className="cardFormTitle">
                Send Instant Reply to <b>{email}</b>{" "}
              </Card.Title>
              <Card.Text className="cardFormText">
                <Form>
                  <Form.Group controlId="formTextField">
                    <Form.Control
                      type="text"
                      onChange={handleSubjectChange}
                      placeholder="Enter Subject for your Reply"
                    />
                    <br />
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={5}
                      onChange={handleBodyChange}
                      placeholder="Enter Your Reply...."
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="formButton">
                    <Button
                      className="formButton"
                      type="button"
                      onClick={() => handleSubmit()}
                    >
                      Send Text as Email Reply
                    </Button>
                  </Form.Group>
                  <br />
                </Form>
              </Card.Text>
            </Card>
            <br />
            <Card className="manageCard">
              <div>
                <div
                  style={{
                    backgroundColor: "#D7C0F5",
                    height: "200px",
                    width: "auto",
                    top: "-0px",
                  }}
                ></div>
                <center>
                  <Card className="emailUI">
                    <div>
                      <br />
                      <div style={{ fontSize: "40px", fontWeight: "700" }}>
                        {subject}
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <div
                        style={{
                          textAlign: "left",
                          fontSize: "22px",
                          fontWeight: "700",
                          marginLeft: "15px",
                          marginRight: "15px",
                        }}
                      >
                        {body}
                      </div>
                    </div>
                    <center>
                      <img
                        style={{ marginTop: "30px" }}
                        src="https://client-backendifyi.vercel.app/static/media/Backendifyi.375e5c7c14bf36ec30c6.png"
                        alt="Logo"
                        className="emailUILogo"
                      />
                    </center>
                  </Card>
                </center>
              </div>
            </Card>
            <br />
          </Container>
        </>
      ) : (
        <>
          <Container>
            <h3>You have already replied to {email}</h3>
            <br />
            <Card className="manageCard">
              <div>
                <div
                  style={{
                    backgroundColor: "#D7C0F5",
                    height: "200px",
                    width: "auto",
                    top: "-0px",
                  }}
                ></div>
                <center>
                  <Card className="emailUI">
                    <div>
                      <br />
                      <div style={{ fontSize: "40px", fontWeight: "700" }}>
                        {subject}
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <div
                        style={{
                          textAlign: "left",
                          fontSize: "22px",
                          fontWeight: "700",
                          marginLeft: "15px",
                          marginRight: "15px",
                        }}
                      >
                        {body}
                      </div>
                    </div>
                    <center>
                      <img
                        style={{ marginTop: "30px" }}
                        src="https://client-backendifyi.vercel.app/static/media/Backendifyi.375e5c7c14bf36ec30c6.png"
                        alt="Logo"
                        className="emailUILogo"
                      />
                    </center>
                  </Card>
                </center>
              </div>
            </Card>
          </Container>
        </>
      )}
      <ToastContainer />
    </>
  );
}

export default Instant