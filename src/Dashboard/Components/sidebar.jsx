import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaUser} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi"
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import "./sidebar.css";
import logo from "../../assets/Backendifyi.png";

const Sidebar = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const navigate = useNavigate()

  return (
    <div className="side-bar">
      {/* <img
        alt=""
        src="/Assets/MedConnect.png"
        width="165"
        height="30"
        className="d-inline-block align-top"
      /> */}

      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "900",
          color: "white",
          marginTop: "8px",
        }}
      >
        <center>
          <span style={{ color: "orange" }} className="dashboardTitle">Backendifyi</span>
        </center>
      </div>
      <Nav className="flex-column sidebar " expand="lg" fixed="left">
        <div className="sidemenu">
          <Nav.Link
            onClick={() => props.onClickButton("ContentMain")}
            className="sidemenu"
            href="#"
          >
            <FaHome className="mr-2" /> {isMobile ? null : "Dashboard"}
          </Nav.Link>
        </div>

        {/* <div className="sidemenu">
          <Nav.Link
            onClick={() => props.onClickButton("Profile")}
            className="sidemenu"
            href="#"
          >
            <FaUser className="mr-2" /> {isMobile ? null : "Profile"}
          </Nav.Link>
        </div> */}
        <div className="sidemenu">
          <Nav.Link
            onClick={() => props.onClickButton("Logout")}
            className="sidemenu"
          >
            <FaUser className="mr-2" />
            {isMobile ? null : "Logout"}
          </Nav.Link>
        </div>

        <div className="sidemenu">
          <Nav.Link
            onClick={() => navigate("/emailbox/documentation")}
            className="sidemenu"
          >
            <HiDocumentText className="mr-2" />
            {isMobile ? null : "Documentation"}
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
};

export default Sidebar;
