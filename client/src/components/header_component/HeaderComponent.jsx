import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderComponent = (props) => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  console.log("HeaderComponent", props);
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand title="Chat Application" href="/">
        <i class="fa fa-comment ml-3 mr-3 fa-lg" aria-hidden="true"></i>
        Chat Application
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/">Home</NavLink>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        {loggedInUser ? (
          <Navbar.Text>
            Signed in as:
            <a
              className="text-uppercase font-weight-bold ml-3 mr-4"
              onClick={(event) => event.preventDefault()}
            >
              {loggedInUser}
            </a>
          </Navbar.Text>
        ) : (
          <Navbar.Text className="mr-3">No User Active</Navbar.Text>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

HeaderComponent.propTypes = {};

export default HeaderComponent;
