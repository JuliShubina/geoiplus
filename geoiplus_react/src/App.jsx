import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/base.css";

import Header from "./components/header/Header";

import Hero from "./components/hero section/Hero";
import AboutSection from "./components/about section/AboutSection";
import ExperienceSection from "./components/experience section/ExperienceSection";
import Portfolio from "./components/portfolio section/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <AboutSection />
        <ExperienceSection />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
