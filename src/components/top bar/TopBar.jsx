import { Container } from "react-bootstrap";
import "./topBar.css";

const TopBar = () => {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <Container>
        <div className="contact-info ">
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:contact@geoiplus.com">info@geoiplus.com</a>
          <i className="bi bi-phone-fill phone-icon"></i>
          +48 500 718 764
        </div>
      </Container>
    </section>
  );
};

export default TopBar;
