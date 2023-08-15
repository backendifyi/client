import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


import "./dashboard.css";

import Sidebar from "../Components/sidebar";
import ContentMain from "../Components/ContentMain";
import Profile from "./profile"
import withAuth from "../../utils/withAuth";
import Logout from "./Logout"

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("ContentMain");

  return (
    <div>
      <Container style={{ backgroundColor: "#4365CD" }} fluid>
        <Row>
          <Col xl={3} lg={3} md={2} sm={6} className="sidebar-wrapper">
            <Sidebar
              onClickButton={(component) => setSelectedComponent(component)}
            />
          </Col>
          <Col xl={9} lg={9} md={10} sm={6} className="content-wrapper">
            {selectedComponent === "ContentMain" && <ContentMain />}
            {selectedComponent === "Logout" && <Logout />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withAuth(Dashboard);
