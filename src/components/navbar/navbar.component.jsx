import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Scrollspy from "react-scrollspy";

const StyledDiv = styled.div`
  nav {
    font-size: 1.25rem;
    background-color: #212121;
    box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
    animation: move-down 0.5s ease-in-out;
  }

  a {
    margin: 0 0.8rem;
    color: #fff;
  }

  @keyframes move-down {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
`;

const NavbarComponent = () => {
  return (
    <>
      <StyledDiv>
        <Navbar fixed="top" variant="dark" expand="md" className="justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Scrollspy
              items={["home", "about", "skills", "experience", "projects", "contact"]}
              currentClassName="active"
              className="navbar-nav m-auto"
              componentTag="div"
              offset={-300}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Scrollspy>
          </Navbar.Collapse>
        </Navbar>
      </StyledDiv>
    </>
  );
};

export default NavbarComponent;
