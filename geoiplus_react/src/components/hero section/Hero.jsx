import React from "react";
import "./hero.css";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <Container>
        <h1>Welcome to Geoinnovation+</h1>
        <h2>Where Innovation Meets Geography</h2>
        <a href="#about" className="btn-get-started scrollto">
          Get Started
        </a>
      </Container>
    </section>
  );
};

export default Hero;
