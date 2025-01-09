import { useEffect, useState } from "react";
import MyNavbar from "../MyNavbar/MyNavbar";
import NavBarForCP from "../navBar for CardPortfolio/navBarForCP";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ from, place }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        const headerOffset = header.offsetTop;
        // console.log(headerOffset);
        const scrolled = window.scrollY;
        // console.log(scrolled);
        if (scrolled > headerOffset) {
          header.classList.add("fixed-top");
          // const headerChild = document.querySelector("header").firstElementChild;
          setIsScrolled(true);
        } else {
          header.classList.remove("fixed-top");
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header">
      {from === "Main" && <MyNavbar isScrolled={isScrolled} />}
      {from === "CardPortfolio" && <NavBarForCP place={place} />}
    </header>
  );
};

Header.propTypes = {
  from: PropTypes.string.isRequired,
};

export default Header;
