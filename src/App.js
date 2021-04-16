import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Slide from "react-reveal/Slide";
import NavbarComponent from "./components/navbar/navbar.component";
import HomeComponent from "./components/home/home.component";
import AboutComponent from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Experience from "./components/experience/experience.component";
import ParallaxBG from "./assets/img/parallax/background.webp";
import "./App.css";

const App = () => {
  return (
    <div
      id="App"
      data-bs-spy="scroll"
      data-bs-target=".navbar-nav"
      data-bs-offset="0"
      className="App"
    >
      <NavbarComponent></NavbarComponent>
      <HomeComponent></HomeComponent>
      <Container id="container" className="container-fluid">
        <Fade duration={1000}>
          <AboutComponent />
        </Fade>
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
        <Fade duration={500}>
          <hr />
          <Experience />
        </Fade>
      </Container>
    </div>
  );
};

export default App;
