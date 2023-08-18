import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Form, Button, Spinner } from "react-bootstrap";
import { FaRegClipboard } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";


import "../Pages/Emailbox/Emailbox.css";

import withAuth from "../../utils/withAuth";
import axios from "axios";

const UpdateAPI = () => {
  const { state } = useLocation();
  const projectId = state.projectId;
  const [loading, setLoading] = useState(false)

  const [apiKey, setApiKey] = useState(undefined);
  const [initialApiKey, setInitialApiKey] = useState("");
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
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/project/apikey?project_id=${state.projectId}`,
        config
      )
      .then((response) => {
        const data = response.data;
        setApiKey(data.api_key);
        setInitialApiKey(data.api_key);
      })
      .catch((error) => {
        console.error("Error fetching API key:", error);
      });
  }, []);

  const handleUpdateAPIKey = () => {
    setLoading(true)
    const data = {
      project_id: state.projectId,
    };
    axios
      .patch(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/project/apikey/`,
        data,
        config
      )
      .then((response) => {
        const updatedApiKey = response.data.api_key; 
        setApiKey(updatedApiKey);
        setInitialApiKey(updatedApiKey); 
        setLoading(false)
        toast.success("API Key updated successfully!");
      })
      .catch((error) => {
        setLoading(false)
        toast.error("An error occurred while updating the API Key.");
      });
  };

  return (
    <>
      <Form className="apiForm">
        <Row>
          <Col xl={9} lg={9} sm={6} xs={6}>
            <Form.Group controlId="formTextField" className="apiFormInput">
              {apiKey === undefined ? (
                <>
                  <Skeleton variant="rounded" height="40px" />
                </>
              ) : (
                <Form.Control
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formButton">
              {apiKey === undefined ? (
                <>
                  <Skeleton variant="rounded" height="40px" />
                </>
              ) : (
                <CopyToClipboard text={apiKey}>
                  <Button className="formButton">
                    <FaRegClipboard />
                  </Button>
                </CopyToClipboard>
              )}
              &nbsp;
              {apiKey === undefined ? (
                <></>
              ) : (
                <Button className="formButton" onClick={handleUpdateAPIKey}>
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      &nbsp;Updating ...
                    </>
                  ) : (
                    "Update API Key"
                  )}
                </Button>
              )}
              &nbsp;
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <ToastContainer />
    </>
  );
};

export default withAuth(UpdateAPI);
