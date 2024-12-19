import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-scroll";
import "./MyNavbar.css";
// import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="full-height-navbar ">
        <Container>
          <Navbar.Brand className="logo me-auto" href="#home">
            Geoinnovation+
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              color: "white",
              border: "none",
              padding: "0px",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="topbar" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link">
                Home
              </Link>
              <Link to="about" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link">
                About
              </Link>
              <Link to="experience" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link">
                Experience
              </Link>
              <Link to="portfolio" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link">
                Portfolio
              </Link>
              <Link to="contact" duration={500} activeClass="active" spy={true} offset={-70} className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
