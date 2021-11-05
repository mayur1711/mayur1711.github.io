import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import profilePicture from "../assets/profile-pic.jpg";

const AboutComponent = () => (
  <Styles>
    <h2 className="header-1 my-4">
      <i className="far fa-address-card"></i>
      &nbsp;&nbsp;About Me
    </h2>
    <Row className="py-4">
      <Col md={9} className="pr-md-3">
        <p>
          I am a graduate student at the{" "}
          <a href="https://cs.uic.edu" target="_blank" rel="noreferrer">
            University of Illinois Chicago
          </a>
          . I am pursuing my Master's in Computer Science here at UIC. I also work with the Technology Solutions Department at UIC as a
          Graduate Assistant and provide a helping hand on skills like Node.js, Express.js, MySQL and Jest framework.
        </p>
        <p>
          Prior to this, I was a Software Engineer with Accenture Solutions, India, where I had worked on a wide variety of tech stacks
          including Web Development, SharePoint Development, and .NET Development.
        </p>
        <p>
          I graduated from{" "}
          <a href="https://kjsce.somaiya.edu" target="_blank" rel="noreferrer">
            K.J. Somaiya College of Engineering, University of Mumbai
          </a>{" "}
          in May 2018 and my major was Electronics and Telecommunication Engineering.
        </p>
        <p>Here are a few technologies I've recently worked on:</p>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>SharePoint</li>
        </ul>
      </Col>
      <Col md={3} className="pt-5 pt-md-0 pb-3 px-md-3 d-flex justify-content-center">
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
    background-color: var(--lightest-slate);
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
    border: 2px solid var(--lightest-slate);
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

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
  }

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 1.5rem;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  li:before {
    content: "\f0da";
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.5rem;
    width: 1.5rem;
  }

  .far {
    color: var(--green);
    font-size: var(--fz-xxxl);
    display: flex;
    align-self: start;
  }
`;

export default AboutComponent;
