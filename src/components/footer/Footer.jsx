import "./footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <Container>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="footer-info">
                <h3>Geoinnovation+</h3>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Geoinnovation+</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
