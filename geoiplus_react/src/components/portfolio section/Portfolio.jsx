import { Container } from "react-bootstrap";
import "./portfolio.css";
import road_damages_preview from "../../img/portfolio/preview/road_damages_preview.png";
import asbestos_project_preview from "../../img/portfolio/preview/asbestos_project_preview.png";
import smart_survey_preview from "../../img/portfolio/preview/smart_survey_preview.png";
import vegetation_management_preview from "../../img/portfolio/preview/vegetation_management_preview.png";
import oblique_viewer_preview from "../../img/portfolio/preview/oblique_viewer_preview.png";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <Container>
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

                <a href="portfolio-road-damages.html" className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={asbestos_project_preview} className="img-fluid" alt="asbestos project preview" />
              <div className="portfolio-info">
                <h4>Asbestos project</h4>
                <p>SW development, data processing</p>

                <a href="portfolio-asbestos-project.html" className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={smart_survey_preview} className="img-fluid" alt="smart survey preview" />
              <div className="portfolio-info">
                <h4>Smart survey</h4>
                <p>SW development</p>

                <a href="portfolio-smart-survey.html" className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={vegetation_management_preview} className="img-fluid" alt="vegetation management preview" />
              <div className="portfolio-info">
                <h4>Vegetation management</h4>
                <p>3D analysis</p>

                <a href="portfolio-vegetation-management.html" className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <img src={oblique_viewer_preview} className="img-fluid" alt="oblique viewer preview" />
              <div className="portfolio-info">
                <h4>Oblique viewer plugin</h4>
                <p>SW development</p>

                <a href="portfolio-oblique-viewer.html" className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
