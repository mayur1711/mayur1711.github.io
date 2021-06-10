import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const NavbarComponent = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowNavbar(document.body.getBoundingClientRect().top > scrollPos);
  };

  let navDisplay = showNavbar ? "nav-active" : "nav-hidden";

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Styles>
      <Navbar
        fixed="top"
        expand="md"
        variant="dark"
        className={`${navDisplay} ${scrollPos === 0 ? "nav-max-height" : ""}`}
        expanded={expanded}
      >
        <Navbar.Brand className="p-0" href="#home">
          <img src={logo} width="42" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setExpanded(false)} href="#about">
              <i className="far fa-address-card"></i>&nbsp;About
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#experience">
              <i className="fas fa-briefcase"></i>&nbsp;Experience
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#projects">
              <i className="far fa-folder-open"></i>&nbsp;Projects
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#contact">
              <i className="far fa-address-book"></i>&nbsp;Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

const Styles = styled.div`
  nav {
    padding: 0.6rem 1.25rem;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    background-color: rgb(13 44 90 / 85%);
    box-shadow: 0 10px 30px -10px var(--navy-shadow);
    gap: 10px;
    backdrop-filter: blur(10px);
    filter: none;
    min-height: var(--nav-scroll-height);
    transition: var(--transition);
  }

  .nav-max-height {
    min-height: var(--nav-height);
  }

  .nav-active {
    transform: translateY(0px);
  }

  .nav-hidden {
    transform: translateY(calc(var(--nav-scroll-height) * -1));
  }

  .navbar-nav {
    gap: 5px;
  }

  a {
    margin: 0 0.4rem;
    color: var(--white) !important;
  }

  a.active,
  a:hover,
  a:focus {
    color: var(--green) !important;
  }
`;

export default NavbarComponent;
