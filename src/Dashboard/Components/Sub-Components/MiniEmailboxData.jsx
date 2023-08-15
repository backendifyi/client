import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Card, Button, Table, Badge, Container } from "react-bootstrap";
import { FaRegClipboard } from "react-icons/fa";
import { MdOutlineEmail, MdDelete } from "react-icons/md";
import { FcFlashOn } from "react-icons/fc";

import "../Content.css";

import axios from "axios";

const MiniEmailboxData = () => {
    const navigate = useNavigate()
    const [emails, setEmails] = useState();

    useEffect(() => {
      const token = localStorage.getItem("btoken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(
          `${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/allEmails/`,
          config
        )
        .then((response) => {
          const data = response.data["results"];
          setEmails(data);
        });
    }, []);

    const renderTableRows = () => {
      if (emails !== undefined) {
        return emails.map((email, idx) => {
          return (
            <tr key={email.id}>
              <td>{idx + 1}</td>
              <td>{email.email_address}</td>
              <td>{email.date}</td>
              <td>{email.project_name}</td>
              <td>
                <Button onClick={() => navigate("/emailbox/instant")}>
                  <FcFlashOn /> View
                </Button>
              </td>
              <td>
                {email.is_valid === true ? (
                  <>
                    <Badge bg="success">Valid</Badge>
                  </>
                ) : email.dns_status === false ? (
                  <>
                    <Badge bg="danger">DNS Not Found</Badge>
                  </>
                ) : (
                  <>
                    <Badge bg="warning">Syntax Error</Badge>
                  </>
                )}
              </td>
              <td>
                {email.role_status === true ? (
                  <>
                    <Badge bg="warning">{email.role}</Badge>
                  </>
                ) : (
                  <>
                    <Badge bg="success">None</Badge>
                  </>
                )}
              </td>
              <td>
                {email.disposable_status === true ? (
                  <>
                    <Badge bg="warning">{email.disposable_provider}</Badge>
                  </>
                ) : (
                  <Badge bg="success">Not Disposable</Badge>
                )}
              </td>

              <td>
                {email.free_status === true ? (
                  <>
                    <Badge bg="success">Free Email</Badge>
                  </>
                ) : (
                  <Badge bg="secondary">{email.domain}</Badge>
                )}
              </td>
            </tr>
          );
        });
      }
    };
  return (
    <>
      <Card className="manageCard">
        <Card.Title className="dashboardSubtitle">
          Recent EmailBox Data
        </Card.Title>
        <Card.Body>
          <Container style={{ overflowX: "auto" }}>
            <Table bordereless="true" hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email Id</th>
                  <th>Date</th>
                  <th>EmailBox</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </Table>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default MiniEmailboxData