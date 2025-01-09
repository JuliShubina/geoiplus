import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import { useState } from "react";
import "../MyNavbar/MyNavbar.css";

const NavBarForCP = ({ place }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="full-height-navbar " expanded={isOpen}>
        <Container>
          <Navbar.Brand className="logo me-auto" href="/">
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
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">{place === "NotFoundPage" ? <HashLink to="/">Home</HashLink> : <HashLink to="/#portfolio">Home</HashLink>}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarForCP;
