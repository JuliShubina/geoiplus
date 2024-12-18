import { Navbar, Nav, Container } from "react-bootstrap";
import "./MyNavbar.css";
// import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" className="full-height-navbar ">
        <Container>
          <Navbar.Brand className="logo me-auto" href="#home">
            Geoinnovation+
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Experience">Experience</Nav.Link>
              <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
