import MyNavbar from "../MyNavbar/MyNavbar";
import NavBarForCP from "../navBar for CardPortffolio/navBarForCP";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ from }) => {
  return (
    <header id="header">
      {from === "Main" && <MyNavbar />}
      {from === "CardPortfolio" && <NavBarForCP />}
    </header>
  );
};

Header.propTypes = {
  from: PropTypes.string.isRequired,
};

export default Header;
