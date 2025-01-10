import Footer from "../footer/Footer.jsx";
import BackToTop from "../backToTop/BackToTop.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <Outlet />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};
