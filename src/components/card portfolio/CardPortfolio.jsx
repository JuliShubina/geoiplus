import { Carousel, Container } from "react-bootstrap";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import "./cardPortfolio.css";
import PropTypes from "prop-types";
import Header from "../header/Header";
import TopBar from "../top bar/TopBar";

const CardPortfolio = ({ project_date, category, project_description, img, name_project }) => {
  return (
    <>
      <TopBar />
      <Header from="CardPortfolio" />

      <section id="breadcrumbs" className="breadcrumbs">
        <Container>
          <Breadcrumbs name_project={name_project} />
          <h2>{name_project}</h2>
        </Container>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <Container>
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider ">
                <Carousel controls={false} className="custom-carousel d-flex  flex-column-reverse">
                  {img.map((imageSrc, index) => (
                    <Carousel.Item key={index}>
                      <img src={imageSrc} className="img-fluid" alt={`${name_project} ${index + 1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {category}
                  </li>
                  <li>
                    <strong>Project date</strong>: {project_date}
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Project description</h2>
                <p>{project_description}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

CardPortfolio.propTypes = {
  project_date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  project_description: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  name_project: PropTypes.string.isRequired,
};

export default CardPortfolio;
