import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Chat, Join } from "./components";
import Layout from "./components/layout_component/Layout";
import "./styles/style.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Layout>
    </Router>
  );
};

export default App;
