import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import styled from "styled-components";
import profilePicture from "../../assets/profile-pic-3.jpg";

const AboutComponent = () => (
  <Styles>
    <h2 className="header-1 my-4">
      <i class="far fa-address-card"></i>&nbsp;&nbsp;About Me
    </h2>
    <Row className="m-0 py-4">
      <Col md={8} className="px-0 pr-md-3">
        <p>
          Hello! My name is Mayur. I like building awesome software. I've built websites, browser plugins, corporate software and even
          games! If you are interested, you can view some of my favorite projects in my <a href="#portfolio">portfolio</a> down below.
        </p>
        <p>
          Need something built or simply want to have chat? Reach out to me on social media or send me an <a href="#contact">email</a>.
        </p>
        <ListGroup horizontal>
          <ListGroup.Item>
            <a href="https://www.linkedin.com/in/mayur-mule" title="LinkedIn" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.github.com/mayur1711" title="Github" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.facebook.com/mayur.mule.142" title="Facebook" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4} className="pt-5 pt-md-0 pb-3 px-0 px-md-3 d-flex justify-content-center">
        <div class="img-wrap-outer">
          <div class="img-wrap-inner">
            <Image alt="profile picture" src={profilePicture} thumbnail fluid />
          </div>
        </div>
      </Col>
    </Row>
  </Styles>
);

const Styles = styled.div`
  .img-wrap-outer {
    width: fit-content;
    height: fit-content;
    background-color: var(--light-green);
    border-radius: var(--border-radius);
    z-index: 1;
    position: relative;
    vertical-align: middle;
  }

  .img-wrap-outer::before {
    top: 0px;
    left: 0px;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }

  .img-wrap-outer::after {
    border: 2px solid var(--light-green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }

  .img-wrap-outer::before,
  .img-wrap-outer::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  .img-wrap-outer:focus,
  .img-wrap-outer:hover {
    background: transparent;
    outline: 0px;
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }

  .img-wrap-outer:hover::before,
  .img-wrap-outer:focus::before,
  .img-wrap-outer:hover .img-wrap-inner,
  .img-wrap-outer:focus .img-wrap-inner {
    background: transparent;
    filter: none;
  }

  .img-wrap-outer:hover::after,
  .img-wrap-outer:focus::after {
    top: 15px;
    left: 15px;
  }

  .img-wrap-outer:hover .img-wrap-inner,
  .img-wrap-outer:focus .img-wrap-inner {
    mix-blend-mode: normal;
  }

  .img-wrap-inner {
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

  .list-group-item {
    padding: 0 1rem 0 0;
    border: none;
    background: none;
  }

  .fa {
    font-size: var(--fz-xxxl);
  }

  .far {
    color: var(--green);
  }
`;

export default AboutComponent;
