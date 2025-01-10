import { Container } from "react-bootstrap";
import Header from "../header/Header.jsx";

const NotFoundPage = () => {
  let place = "NotFoundPage";
  return (
    <>
      <Header from="CardPortfolio" place={place} />
      <main className="d-flex align-items-center">
        <Container>
          <div className="section-title ">
            <span>404 Not Found</span>
            <h2>404 Not Found</h2>
          </div>
        </Container>
      </main>
    </>
  );
};

export default NotFoundPage;
