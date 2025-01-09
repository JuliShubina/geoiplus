import { Container } from "react-bootstrap";
import "./portfolio.css";
import road_damages_preview from "../../data/img/portfolio/preview/road_damages_preview.png";
import asbestos_project_preview from "../../data/img/portfolio/preview/asbestos_project_preview.png";
import smart_survey_preview from "../../data/img/portfolio/preview/smart_survey_preview.png";
import vegetation_management_preview from "../../data/img/portfolio/preview/vegetation_management_preview.png";
import oblique_viewer_preview from "../../data/img/portfolio/preview/oblique_viewer_preview.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <section id="portfolio" className="portfolio">
        <Container data-aos="fade-up">
          <div className="section-title">
            <span>Portfolio</span>
            <h2>Portfolio</h2>
          </div>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item">
              <img src={road_damages_preview} className="img-fluid" alt="road damages preview" />
              <div className="portfolio-info">
                <h4>Object detection for road damages</h4>
                <p>ML/AI</p>

                <Link to={"portfolio-road-damages"} className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={asbestos_project_preview} className="img-fluid" alt="asbestos project preview" />
              <div className="portfolio-info">
                <h4>Asbestos project</h4>
                <p>SW development, data processing</p>

                <Link to={"portfolio-asbestos-project"} className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={smart_survey_preview} className="img-fluid" alt="smart survey preview" />
              <div className="portfolio-info">
                <h4>Smart survey</h4>
                <p>SW development</p>

                <Link to={"portfolio-smart-survey"} className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={vegetation_management_preview} className="img-fluid" alt="vegetation management preview" />
              <div className="portfolio-info">
                <h4>Vegetation management</h4>
                <p>3D analysis</p>

                <Link to={"portfolio-vegetation-management"} className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={oblique_viewer_preview} className="img-fluid" alt="oblique viewer preview" />
              <div className="portfolio-info">
                <h4>Oblique viewer plugin</h4>
                <p>SW development</p>

                <Link to={"portfolio-oblique-viewer"} className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
