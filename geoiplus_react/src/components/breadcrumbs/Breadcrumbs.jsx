import Breadcrumb from "react-bootstrap/Breadcrumb";
import { HashLink } from "react-router-hash-link";
import "./breadcrumbs.css";
import PropTypes from "prop-types";

const Breadcrumbs = ({ name_project }) => {
  return (
    <Breadcrumb className="breadcrumbs">
      <li className="breadcrumb-item">
        <HashLink to="/#portfolio">Home</HashLink>
      </li>
      <Breadcrumb.Item active>{name_project}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
Breadcrumbs.propTypes = {
  name_project: PropTypes.string.isRequired,
};

export default Breadcrumbs;
