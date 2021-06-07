import React from "react";
import { Fade } from "react-reveal";
import "./App.css";
import AboutComponent from "./components/about/about.component";
import ContactComponent from "./components/contact/contact.component";
import ExperienceComponent from "./components/experience/experience.component";
import HomeComponent from "./components/home/home.component";
import NavbarComponent from "./components/navbar/navbar.component";
import ProjectsComponent from "./components/projects/projects.component";

const App = () => (
  <div id="app">
    <header>
      <section id="navbar">
        <NavbarComponent />
      </section>
    </header>

    <main>
      <section id="home" className="vh-100 dark-section">
        <div className="section-container d-flex align-items-center h-100">
          <Fade duration={2000}>
            <HomeComponent />
          </Fade>
        </div>
      </section>
      <section id="about">
        <div className="section-container">
          <Fade duration={2000}>
            <AboutComponent />
          </Fade>
        </div>
      </section>
      <section id="experience" className="dark-section">
        <div className="section-container">
          <Fade duration={2000}>
            <ExperienceComponent />
          </Fade>
        </div>
      </section>
      <section id="projects">
        <div className="section-container">
          <Fade duration={2000}>
            <ProjectsComponent />
          </Fade>
        </div>
      </section>
      <section id="contact" className="dark-section">
        <div className="section-container">
          <Fade duration={2000}>
            <ContactComponent />
          </Fade>
        </div>
      </section>
    </main>

    <footer className="dark-section"></footer>
  </div>
);

export default App;
