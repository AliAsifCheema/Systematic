import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./component/fixedComponents/nav1";
import Home from "./component/main_component/home";
import CopyRight from "./component/sub_comonents/copyright";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Home />
        <CopyRight />
      </Router>
    </React.Fragment>
  );
}

export default App;
