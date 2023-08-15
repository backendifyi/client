import React, { useEffect, useState } from "react";

import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState();
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
        `${process.env.REACT_APP_API_ACTIVE_URL}/api/client/profile/`,
        config
      )
      .then((response) => {
        setProfile(response.data);
      });
  }, []);
  return (
    <div>
      {profile != undefined ? <div>Welcome, {profile.name}</div> : <></>}
    </div>
  );
};

export default Profile;
