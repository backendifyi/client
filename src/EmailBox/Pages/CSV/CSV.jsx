import React , {useState, useEffect} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import NavBar from '../../../Components/NavBar/NavBar';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import MouseRoundedIcon from "@mui/icons-material/MouseRounded";
import NextPlanRoundedIcon from "@mui/icons-material/NextPlanRounded";

import axios from 'axios';

const CSV = () => {
  const { state } = useLocation();
  const navigate = useNavigate()
  const [ projectId, setProjectId] = useState();

  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    const { allowPage } = state || {}; // Access the parameter from state
    if (!allowPage) {
      return navigate("/dashboard");
    } else {
      setProjectId(state.projectId)
      setLoadPage(true);
    }
  }, [state, navigate, loadPage, projectId]);

  const [formData, setFormData] = useState({
    dns_status: true,
    disposable_status: false,
    role_status: false,
    free_status: true,
    project_id: projectId
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Make the axios call using the stored form data
    toast.success("Please Check your Inbox!!");
    axios
      .post(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/csv/`,
        formData
      )
      .then((response) => {
        // Handle the response
        navigate("/emailbox", {
          state: {
            allowPage: true,
            projectId: projectId,
          },
        });
      })
      .catch((error) => {
        // Handle the error
      });
  };

  return (
    <>
      <NavBar />
      {loadPage === true ? (
        <>
          <Container>
            <Button
              onClick={() =>
                navigate("/emailbox", {
                  state: {
                    allowPage: true,
                    projectId: state.projectId,
                  },
                })
              }
            >
              <BsFillArrowLeftCircleFill /> &nbsp; EmailBox
            </Button>
            <Row style={{ marginTop: "5%" }}>
              <Col xl={6} lg={6} sm={12} xs={12}>
                <Card style={{ border: "None" }}>
                  <Container>
                    <Card.Body>
                      <Timeline position="alternate">
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot color="primary">
                              <TuneRoundedIcon />
                            </TimelineDot>
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>Customize your CSV</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot color="primary">
                              <MouseRoundedIcon />
                            </TimelineDot>
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>Click on "Get CSV"</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot color="primary">
                              <EmailRoundedIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            CSV is Emailed to You
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot color="primary">
                              <NextPlanRoundedIcon />
                            </TimelineDot>
                          </TimelineSeparator>
                          <TimelineContent>
                            Next CSV available in 2 hours
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                    </Card.Body>
                  </Container>
                </Card>
              </Col>
              <Col xl={6} lg={6} sm={12} xs={12}>
                <Card style={{ border: "None" }}>
                  <Container>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Do you want <b>"DNS Not Found"</b> email addresses to
                          be included?
                        </Form.Label>
                        <Form.Select
                          name="dns_status"
                          value={formData.dnsNotFound}
                          onChange={handleInputChange}
                        >
                          <option value={true}>No</option>
                          <option value={false}>Yes</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Do you want <b>"Disposable"</b> email addresses to be
                          included?
                        </Form.Label>
                        <Form.Select
                          name="disposable_status"
                          value={formData.disposable_status}
                          onChange={handleInputChange}
                        >
                          <option value={false}>No</option>
                          <option value={false}>Yes</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Do you want <b>"Role based"</b> email addresses to be
                          included?
                        </Form.Label>
                        <Form.Select
                          name="role_status"
                          value={formData.role_status}
                          onChange={handleInputChange}
                        >
                          <option value={false}>No</option>
                          <option value={false}>Yes</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          What <b>"type"</b> of email addresses to be included?
                        </Form.Label>
                        <Form.Select
                          name="free_status"
                          value={formData.free_status}
                          onChange={handleInputChange}
                        >
                          <option value={true}>
                            Only Free Email Addresses
                          </option>
                          <option value={false}>
                            Only Business Email Addresses
                          </option>
                          <option value={null}>
                            Both, Free and Business Email Addresses
                          </option>
                        </Form.Select>
                      </Form.Group>
                      <Button onClick={handleFormSubmit}>Get CSV</Button>
                    </Form>
                  </Container>
                </Card>
              </Col>
            </Row>
            <br />
          </Container>
          <ToastContainer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default CSV