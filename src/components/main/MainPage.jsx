import AboutSection from "../aboutSection/AboutSection.jsx";
import ContactSection from "../contactSection/ContactSection.jsx";
import ExperienceSection from "../experienceSection/ExperienceSection.jsx";
import Hero from "../heroSection/Hero.jsx";
import Portfolio from "../portfolioSection/Portfolio.jsx";
import Header from "../header/Header.jsx";
import TopBar from "../topBar/TopBar.jsx";

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
