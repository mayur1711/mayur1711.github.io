import React from "react";
import { Container, Row, Col, Card, CardColumns, Image } from "react-bootstrap";
import styled from "styled-components";
import { skills } from "./skills-data";

const StyledDiv = styled.div`
  .container {
    font-size: 1.1rem;
  }

  .card {
    transition: transform 0.3s;
    background: var(--lightest-navy);
  }

  .card:hover {
    transform: scale(1.05);
    z-index: 10;
  }

  .card:hover .card-title {
    color: var(--green);
  }

  .card-title {
    font-size: 1.5rem;
    color: var(--light-slate);
  }

  .card-text a {
    color: var(--slate) !important;
  }

  img {
    width: 3rem;
  }

  @media (min-width: 576px) {
    .card-columns {
      column-count: 1;
    }
  }

  @media (min-width: 768px) {
    .card-columns {
      column-count: 2;
    }
  }

  @media (min-width: 992px) {
    .card-columns {
      column-count: 3;
    }
  }
`;

const SkillsComponent = () => (
  <>
    <StyledDiv>
      <Container className="p-3">
        <Row className="p-3">
          <Col>
            <h1 className="header-1 text-center">Technical Skills</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col className="px-4">
            <CardColumns>
              {skills
                .sort((a, b) => a.position - b.position)
                .map((skill, index) => (
                  <Card className="mt-4 mb-0" key={index}>
                    <Card.Body>
                      <Card.Title className="p-2">{skill.name}</Card.Title>
                      <hr />
                      <Card.Text className="card-text d-flex flex-column">
                        {skill.array.map((skill, index) => (
                          <span className="p-2" key={index}>
                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noreferrer">
                              <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="my-1 ml-1 mr-3" />
                              {skill.skillName}
                            </a>
                          </span>
                        ))}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  </>
);

export default SkillsComponent;
