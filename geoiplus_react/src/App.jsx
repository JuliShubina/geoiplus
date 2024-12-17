import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/base.css";

import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import ContainerFluidBreakpointExample from "./components/TestNavbar";
import Hero from "./components/hero section/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
