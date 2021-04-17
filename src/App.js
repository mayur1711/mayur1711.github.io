import React from "react";
import { Fade, Slide } from "react-reveal";
import NavbarComponent from "./components/navbar/navbar.component";
import HomeComponent from "./components/home/home.component";
import AboutComponent from "./components/about/about.component";
import SkillsComponent from "./components/skills/skills.component";
import Experience from "./components/experience/experience.component";
import "./App.css";

const App = () => (
  <div id="app">
    <section id="navbar">
      <NavbarComponent />
    </section>

    <section id="home">
      <HomeComponent />
    </section>

    <section id="about" className="px-md-5 py-5">
      <Fade duration={1000}>
        <AboutComponent />
      </Fade>
    </section>

    <section id="skills" className="px-md-5 py-5">
      <Slide bottom duration={500}>
        <SkillsComponent />
      </Slide>
    </section>

    <section id="experience" className="px-md-5 py-5">
      <Fade duration={1000}>
        <Experience />
      </Fade>
    </section>
  </div>
);

export default App;
