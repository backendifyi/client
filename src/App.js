import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Dashboard from "./Dashboard/Pages/dashboard";
import Emailbox from "./EmailBox/Pages/Emailbox/Emailbox";
import Instant from "./EmailBox/Pages/Instant";
import EmailboxDoc from "./Documentation/EmailBox/EmailboxDoc";
import PassageLogin from "./Passage/PassageLogin";
import CSV from "./EmailBox/Pages/CSV/CSV";

import GoogleAuth from "./Pages/Authentication/GoogleAuth";
import Callback from "./Pages/Authentication/Callback";


import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GoogleAuth" element={<GoogleAuth />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emailbox" element={<Emailbox />} />
          <Route path="/emailbox/instant" element={<Instant />} />
          <Route path="/emailbox/documentation" element={<EmailboxDoc />} />
          <Route path="/login" element={<PassageLogin />} />
          <Route path="/emailbox/csv" element={<CSV />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
