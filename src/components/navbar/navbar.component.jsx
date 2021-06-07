import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const NavbarComponent = () => {
  return (
    <Styles>
      <Navbar fixed="top" expand="md" variant="dark">
        <Navbar.Brand className="p-0" href="#home">
          <img src={logo} width="42" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="#about">
              <i class="far fa-address-card"></i>&nbsp;About
            </Nav.Link>
            <Nav.Link href="#experience">
              <i class="fas fa-briefcase"></i>&nbsp;Experience
            </Nav.Link>
            <Nav.Link href="#projects">
              <i class="far fa-folder-open"></i>&nbsp;Projects
            </Nav.Link>
            <Nav.Link href="#contact">
              <i class="far fa-address-book"></i>&nbsp;Contact
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
    font-size: var(--fz-sm);
    background-color: var(--light-navy);
    box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
    animation: move-down 0.5s ease-in-out;
    gap: 10px;
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

  @keyframes move-down {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
`;

export default NavbarComponent;
