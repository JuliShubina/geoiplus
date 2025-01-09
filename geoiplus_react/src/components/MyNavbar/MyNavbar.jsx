import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-scroll";
import "./MyNavbar.css";
import { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const MyNavbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className={`full-height-navbar ${isScrolled ? "scrolled-navbar" : ""}`} expanded={isOpen}>
        <Container>
          <Navbar.Brand className="logo me-auto" href="#topbar">
            Geoinnovation+
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              color: "white",
              border: "none",
              padding: "0px",
            }}
            onClick={handleToggle}
          >
            <i className="bi bi-list mobile-nav-toggle"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="home" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link" onClick={closeMenu}>
                Home
              </Link>
              <Link to="about" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link" onClick={closeMenu}>
                About
              </Link>
              <Link to="experience" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link" onClick={closeMenu}>
                Experience
              </Link>
              <Link to="portfolio" duration={500} activeClass="active" spy={true} offset={-40} className="nav-link" onClick={closeMenu}>
                Portfolio
              </Link>
              <Link to="contact" duration={500} activeClass="active" spy={true} offset={-40} className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
MyNavbar.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default MyNavbar;
