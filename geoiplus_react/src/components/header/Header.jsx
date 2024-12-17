import MyNavbar from "../MyNavbar/MyNavbar";
import { Container } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <>
      <Container>
        <section id="topbar">
          <div>
            <div className="contact-info ">
              {/* <i className="bi bi-envelope-fill"></i> */}
              <a href="mailto:contact@geoiplus.com">info@geoiplus.com</a>
              {/* <i className="bi bi-phone-fill phone-icon"></i> */}
              +48 500 718 764
            </div>
          </div>
        </section>
      </Container>
      <header id="header">
        <MyNavbar />
      </header>
    </>
  );
};

export default Header;
