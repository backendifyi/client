import React, { useState } from "react";
import axios from "axios";

import GoogleButton from "react-google-button";

const GoogleAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/client/auth/google/url`
      );
      window.location.href = response.data.auth_url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logout logic
  };

  // const buttonStyle = {
  //   borderRadius: "3px 3px 3px 3px",
  // };

  return (
    <>

        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <GoogleButton onClick={handleGoogleLogin} />
        )}
    </>
  );
};

export default GoogleAuth;
