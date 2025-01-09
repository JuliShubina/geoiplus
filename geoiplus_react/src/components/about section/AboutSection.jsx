import { Container } from "react-bootstrap";
import aboutImg from "../../data/img/about.jpg";
import "./aboutSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section id="about" className="about">
      <Container>
        <div className="section-title">
          <span>About us</span>
          <h2>About us</h2>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2 " data-aos="fade-left">
            <img src={aboutImg} alt="Image about section" className="img-fluid" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 " data-aos="fade-right">
            <p>
              At GeoInnovation Plus, we are passionate about pushing the boundaries in the field of geographical data processing, GIS, and web development. Our mission is to transform complex data
              into valuable insights because we believe that data is only data until it&#39;s turned into information.
            </p>
            <p>
              With a deep dedication to innovation within the GEO domain, we are committed to making your work as easy as possible. We understand the challenges that our customers face, and we are
              relentless in our pursuit of solutions that offer the best value at the lowest possible costs.
            </p>
            <p>
              Our team of experts is driven by a shared vision: to simplify the complexities of geographical data and create user-friendly tools and platforms that empower businesses and individuals
              to harness the power of location-based information.
            </p>
            <p>
              Join us on this exciting journey as we strive to unlock the full potential of geographical data and enable you to make informed decisions that drive your success. Your success is our
              success, and we can&#39;t wait to embark on this collaborative journey with you.
            </p>
            <p>
              At GeoInnovation Plus, the &rdquo;Plus&rdquo; in our name symbolizes something profound – it signifies &rdquo;YOU.&rdquo; We believe in putting your interests, ambitions, and dreams at
              the forefront of everything we do. With us, it&#39;s not just about the services we offer; it&#39;s about a personalized experience tailored to your unique needs and aspirations.
            </p>
            <p>
              In our commitment to excellence, we put you first, making sure that every interaction and solution we provide is designed to enhance your journey and empower your success. We&#39;re not
              just a company; we&#39;re your dedicated partner, working hand in hand to turn your goals into reality. At GeoInnovation Plus, we&#39;re not just in the business of geographical
              innovation; we&#39;re in the business of making your dreams come true. Come experience the &rdquo;Plus&rdquo; that sets us apart, and let&#39;s shape your future together.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
