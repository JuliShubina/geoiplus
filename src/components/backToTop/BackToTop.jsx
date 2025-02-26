import "./backToTop.css";
import { useEffect, useState } from "react";
const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a href="#" className={`back-to-top d-flex align-items-center justify-content-center ${isActive ? "active" : ""}`}>
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default BackToTop;
