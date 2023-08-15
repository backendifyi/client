import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import "../Pages/Emailbox/Emailbox.css";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import withAuth from "../../utils/withAuth";

const UpdateName = () => {
  const { state } = useLocation();


  // const [projectId, setProjectId] = useState()
  const [projectName, setProjectName] = useState("");
  const [initialProjectName, setInitialProjectName] = useState("");
  const token = localStorage.getItem("btoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/project/name?project_id=${state.projectId}`,
        config
      )
      .then((response) => {
        const data = response.data;
        setProjectName(data.project_name);
        setInitialProjectName(data.project_name);
      });

      
  }, []);

  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = async () => {
    if (projectName === initialProjectName) {

      toast.error("The project name is already set to this value.");
      return;
    }

    if (!projectName) {
      toast.error("Please enter a project name");
      return;
    }

    const data = {
      project_id: state.projectId,
      project_name: projectName,
    };

    axios
      .patch(
        `${process.env.ACTIVEREACT_APP_API_ACTIVE_URL_URL}/api/project/name/`,
        data,
        config
      )
      .then((response) => {
        toast.success("Project name updated successfully!");
        setInitialProjectName(projectName); // Update initialProjectName to reflect the new value
      })
      .catch((error) => {
        if (error.response.status == 409) {
          toast.error("Project Name already exists.");
        } else {
          toast.error("An error occurred while updating the project name.");
        }
      });
  };

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formTextField">
              <Form.Control
                type="text"
                onChange={handleInputChange}
                value={projectName}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formButton">
              <Button
                className="formButton"
                type="button"
                onClick={handleSubmit}
              >
                Update Name
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <ToastContainer />
    </>
  );
};

export default withAuth(UpdateName);
