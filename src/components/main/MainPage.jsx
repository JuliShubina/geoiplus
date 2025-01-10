import AboutSection from "../about section/AboutSection.jsx";
import ContactSection from "../contact section/ContactSection.jsx";
import ExperienceSection from "../experience section/ExperienceSection.jsx";
import Hero from "../hero section/Hero.jsx";
import Portfolio from "../portfolio section/Portfolio.jsx";
import Header from "../header/Header.jsx";
import TopBar from "../top bar/TopBar.jsx";

const MainPage = () => {
  return (
    <>
      <div id="home">
        <TopBar />
        <Header from="MainPage" />
        <Hero />
      </div>

      <main id="main">
        <AboutSection />
        <ExperienceSection />
        <Portfolio />
        <ContactSection />
      </main>
    </>
  );
};

export default MainPage;
