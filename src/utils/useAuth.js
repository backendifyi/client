

import { useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken =
      localStorage.getItem("btoken") || sessionStorage.getItem("btoken");
    setToken(storedToken);
  }, []);

  return token;
};

export default useAuth;
