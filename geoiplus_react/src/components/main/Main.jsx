import AboutSection from "../about section/AboutSection";
import ContactSection from "../contact section/ContactSection";
import ExperienceSection from "../experience section/ExperienceSection";
import Hero from "../hero section/Hero";
import Portfolio from "../portfolio section/Portfolio";
import Header from "../header/Header";

const Main = () => {
  return (
    <>
      <Header from="Main" />
      <Hero />
      <main id="main">
        <AboutSection />
        <ExperienceSection />
        <Portfolio />
        <ContactSection />
      </main>
    </>
  );
};

export default Main;
