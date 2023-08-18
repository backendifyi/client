import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import {
  Card,
  Button,

  Table,
} from "react-bootstrap";

import "../Content.css";

const ManageSection = () => {
  const [emailboxList, setEmailboxList] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("btoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_ACTIVE_URL}/api/emailbox/list/`, config)
      .then((response) => {
        const data = response.data;
        setEmailboxList(data);
      });
  },[])
    
  const renderSkeletonTableRows = () => {
    return (
      <tr>
        <td>
          <Skeleton variant="circular" height="30px" width="30px" />
        </td>
        <td>
          <Skeleton variant="rounded" height="30px" width="60px" />
        </td>
        <td>
          <Skeleton variant="rounded" height="30px" width="60px" />
        </td>
      </tr>
    );
  }
  const renderTableRows = () => {
    if (emailboxList !== undefined) {
      return emailboxList.map((msg, idx) => {
        return (
          <tr className="tableRow" key={idx}>
            <td>
              <div className="circle">
                <span className="number">{idx + 1}</span>
              </div>
            </td>
            <td className="emailboxName">{msg.name}</td>
            <td>
              <Button
                size="sm"
                className="visitButton"
                onClick={() =>
                  navigate("/emailbox", {
                    state: {
                      allowPage: true,
                      projectId: msg.project_id,
                    },
                  })
                }
              >
                Visit
              </Button>
            </td>
          </tr>
        );
      });
    }
  }
  return (
    <>
      <Card className="manageCard">
        <Card.Title className="dashboardSubtitle">
          View & Manage EmailBox
        </Card.Title>
        <Card.Body>
          <Table bordereless="true" size="sm" className="emailboxTable">
            {emailboxList === undefined ? (
              <tbody>{renderSkeletonTableRows()}</tbody>
            ) : (
              <tbody>{renderTableRows()}</tbody>
            )}
            
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export default ManageSection;
