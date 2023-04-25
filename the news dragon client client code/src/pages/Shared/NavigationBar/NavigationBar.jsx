import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>

              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && <FaUserAlt style={{ fontSize: "2rem" }} />}

              {user ? (
                <Button variant="secondary">LogOut</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;