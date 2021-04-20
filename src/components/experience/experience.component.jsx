import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import LOGO_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import BG_ACCENTURE from "../../assets/img/experience/accenture-logo-2.svg";

const StyledDiv = styled.div`
  .container {
    font-size: 1.1rem;
  }

  .img-resize {
    width: 10rem;
  }

  .style {
    font-size: 1.25rem;
  }

  .jumbotron {
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${BG_ACCENTURE}) no-repeat var(--lightest-navy);
    background-size: cover;
    background-position: center center;
  }

  .body-title-style {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .parallax-effect {
    transform-style: preserve-3d;
  }

  .card {
    transform: translateZ(60px);
    background: none;
    border: none;
  }

  .card-header,
  .card-body {
    background: none;
    border: none;
  }

  /*
  @media (min-width: 992px) {
    .jumbotron {
      width: 85% !important;
    }
  }

  @media (min-width: 1200px) {
    .jumbotron {
      width: 75% !important;
    }
  }
  */
`;

const Experience = () => (
  <>
    <StyledDiv>
      <Container className="p-3">
        <Row className="p-3">
          <Col>
            <h1 className="section-heading text-center">
              <span className="underline">&nbsp;EXPERIENCE&nbsp;</span>
            </h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col className="p-4 d-flex justify-content-center">
            <Tilt
              className="jumbotron parallax-effect p-0"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={2000}
              transitionSpeed={1500}
              scale={1.1}
              gyroscope={true}
            >
              <Card>
                <Card.Header as="h5" className="text-center flex-wrap">
                  <Card.Img variant="top" className="img-resize" src={LOGO_ACCENTURE} alt="Accenture logo" />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python
                    <br />
                    <strong>Duration:</strong> June 2019 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.
                      </li>
                      <li>
                        <strong>Developed</strong> automation system to create SQL bulk query scripts that increased efficiency by 80% and decreased
                        working hours from 4 hours to 30 mins per task.
                      </li>
                      <li>
                        <strong>Provided</strong> application maintenance while working as `Production Support`.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according to the business requirements.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  </>
);

export default Experience;
