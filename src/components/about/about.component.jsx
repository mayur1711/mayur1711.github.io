import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import profilePicture from "../../assets/profile-pic-3.jpg";

const AboutComponent = () => (
  <Styles>
    <h2 className="header-1 my-4">
      <i className="far fa-address-card"></i>&nbsp;&nbsp;About Me
    </h2>
    <Row className="py-4">
      <Col md={8} className="pr-md-3">
        <p>
          Hello! My name is Mayur. I like building awesome software. I've built websites, browser plugins, corporate software and even
          games! If you are interested, you can view some of my favorite projects in my <a href="#portfolio">portfolio</a> down below.
        </p>
        <p>
          Need something built or simply want to have chat? Reach out to me on social media or send me an <a href="#contact">email</a>.
        </p>
      </Col>
      <Col md={4} className="pt-5 pt-md-0 pb-3 px-md-3 d-flex justify-content-center">
        <div className="img-outer-wrap">
          <div className="img-inner-wrap">
            <Image alt="profile picture" src={profilePicture} thumbnail fluid />
          </div>
        </div>
      </Col>
    </Row>
  </Styles>
);

const Styles = styled.div`
  .img-outer-wrap {
    width: fit-content;
    height: fit-content;
    background-color: var(--light-green);
    border-radius: var(--border-radius);
    z-index: 1;
    position: relative;
    vertical-align: middle;
  }

  .img-outer-wrap::before {
    top: 0px;
    left: 0px;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }

  .img-outer-wrap::after {
    border: 2px solid var(--light-green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }

  .img-outer-wrap::before,
  .img-outer-wrap::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  .img-outer-wrap:focus,
  .img-outer-wrap:hover {
    background: transparent;
    outline: 0px;
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }

  .img-outer-wrap:hover::before,
  .img-outer-wrap:focus::before,
  .img-outer-wrap:hover .img-inner-wrap,
  .img-outer-wrap:focus .img-inner-wrap {
    background: transparent;
    filter: none;
  }

  .img-outer-wrap:hover::after,
  .img-outer-wrap:focus::after {
    top: 15px;
    left: 15px;
  }

  .img-outer-wrap:hover .img-inner-wrap,
  .img-outer-wrap:focus .img-inner-wrap {
    mix-blend-mode: normal;
  }

  .img-inner-wrap {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(100%);
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  img {
    border-radius: var(--border-radius);
    width: 100%;
    max-width: 14rem;
    height: auto;
    padding: 0px;
  }

  .fa {
    font-size: var(--fz-xxxl);
  }

  .far {
    color: var(--green);
  }
`;

export default AboutComponent;
