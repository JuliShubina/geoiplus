import { useEffect } from "react";
import "./hero.css";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Инициализация AOS
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center">
      <Container data-aos="fade-up" data-aos-duration="1000">
        <h1>Welcome to Geoinnovation+</h1>
        <h2>Where Innovation Meets Geography</h2>
        <a href="#about" className="btn-get-started">
          Get Started
        </a>
      </Container>
    </section>
  );
};

export default Hero;
