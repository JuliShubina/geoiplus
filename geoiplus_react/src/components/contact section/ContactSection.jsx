import { Container } from "react-bootstrap";
import "./contactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <Container>
        <div className="section-title">
          <span>Contact</span>
          <h2>Contact</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>info@geoiplus.com</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+48 500 718 764</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
