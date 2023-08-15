import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const withAuth = (Component) => {
  const WrappedComponent = (props) => {
    // const token = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("btoken");
      if (!token || token === null) {
        // Redirect unauthenticated users to the login page
        navigate("/");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        };
        
        axios
          .get(
            `${process.env.REACT_APP_API_ACTIVE_URL}/api/client/auth/page/`,
            config
          )
          .then((response) => {
            if (response.status !== 200) {
              navigate("/");
            }
          });
      }
    }, [navigate]);

    // Render the protected component for authenticated users
    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withAuth;
