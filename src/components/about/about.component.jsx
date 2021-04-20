import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import profilePic from "../../assets/img/about/profile-pic-1.jpg";

const StyledDiv = styled.div`
  .container {
    font-size: 1.1rem;
  }

  .profile-pic {
    width: 100%;
    max-width: 15rem;
    height: auto;
  }

  ul {
    padding-left: 1rem;
  }

  .list-group-item {
    border: none;
    padding: 0 1rem 0 0;
    background: none;
  }

  .fa {
    font-size: 1.5rem;
  }
`;

const AboutComponent = () => (
  <>
    <StyledDiv>
      <Container className="p-3">
        <Row className="p-3">
          <Col>
            <h1 className="section-heading text-center">
              <span className="underline">&nbsp;ABOUT ME&nbsp;</span>
            </h1>
          </Col>
        </Row>
        <Row className="align-items-start p-3">
          <Col md={3} className="text-center p-4">
            <Image className="profile-pic" alt="Profile Pic" src={profilePic} thumbnail fluid rounded roundedCircle />
          </Col>
          <Col md={5} className="p-4">
            <h4>Hi, It's me!</h4>
            <p>
              I like building awesome software. I've built websites, browser plugins, corporate software and even games! If you are interested, you
              can view some of my favorite projects in my <a href="#portfolio">portfolio</a> down below.
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
          <Col md={4} className="p-4">
            <h4>My personal interests</h4>
            <p>
              When I am not <a href="#skills">coding</a> my next project, I enjoy spending my time doing any of the following:
            </p>
            <ul>
              <li>
                I love <strong>learning Korean</strong>;
              </li>
              <li>
                am watching my favorite <strong>eSports</strong> games;
              </li>
              <li>
                And I am <strong>meeting more people</strong> and creating new opportunities.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  </>
);

export default AboutComponent;
