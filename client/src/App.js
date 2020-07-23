import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Chat, Join } from "./components";
import "./styles/style.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
