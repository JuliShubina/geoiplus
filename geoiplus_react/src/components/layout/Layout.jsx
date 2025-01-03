import Footer from "../footer/Footer";
import BackToTop from "../back to-top/BackToTop";
import { Outlet } from "react-router-dom";
import TopBar from "../top bar/TopBar";

export const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};
