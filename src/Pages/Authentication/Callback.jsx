import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    const navigate = useNavigate()

    useEffect(() => {
        axios
          .post(
            `${process.env.REACT_APP_API_ACTIVE_URL}/api/client/auth/google/callback/`,
            {
              code: code,
            }
          )
          .then(function (response) {
            const token = response.data["access_token"];
            const status = response.status;
            if (status === 200) {
              localStorage.setItem("btoken", token);
              navigate("/dashboard");
            } else {
              navigate("/");
            }
          });

    },[])

    // window.location.href = "/"

    // const handleGoogleCallback = async () => {
    //   try {
    //     const response = await axios.get(
    //       "http://127.0.0.1:8000/api/client/auth/google/url"
    //     );
    //     window.location.href = response.data.auth_url;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  return (
    <></>
  )
}

export default Callback