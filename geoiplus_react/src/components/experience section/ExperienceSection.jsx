import { Container } from "react-bootstrap";
import "./experienceSection.css";

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience">
      <Container>
        <div className="section-title">
          <span>Experience</span>
          <h2>Experience</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4>GIS</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> GIS data processing
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> GIS data analysis
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> GIS data conversion
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Image processing
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Image analysis
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Production automation
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-internet-explorer"></i>
              </div>
              <h4>WEB</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> WMS/WFS/GeoServer
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Amazon/Azure services
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> RestAPI
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Hybrid solutions (WEB + desktop)
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-brain"></i>
              </div>
              <h4>AI\ML</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> Object detection
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Image classNameification
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Image segmentation
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Point cloud classNameification
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Regression analysis
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> GAN models
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dev-to"></i>
              </div>
              <h4>Development</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> ArcGis SDK
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Microstation API
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> GDAL
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> HTML, CSS, JavaScript
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Node.js, Vue.js, React
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> C#, .NET
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Python
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> TensorFlow/PyTorch
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> AWS SageMaker
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Google Colab
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> Azure Machine Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
