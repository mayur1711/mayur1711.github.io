import React from "react";
import { Container, Row, Col, Card, CardColumns, Image } from "react-bootstrap";
import styled from "styled-components";
import { skills } from "./skills-data";

const StyledDiv = styled.div`
  .container-fluid {
    font-size: 1.1rem;
  }

  .card {
    transition: transform 0.3s;
  }

  .card:hover {
    transform: scale(1.05);
    z-index: 10;
  }

  .card-title {
    font-size: 2rem;
  }

  img {
    width: 3rem;
  }
`;

const SkillsComponent = () => (
  <>
    <StyledDiv>
      <Container fluid className="p-3">
        <Row className="p-3">
          <Col>
            <h1 className="section-heading text-center">
              <span className="underline">&nbsp;TECHNICAL SKILLS&nbsp;</span>
            </h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            <CardColumns>
              {skills
                .sort((a, b) => a.position - b.position)
                .map((skill, index) => (
                  <Card className="mt-3" key={index}>
                    <Card.Body>
                      <Card.Title className="p-2">{skill.name}</Card.Title>
                      <hr />
                      <Card.Text className="card-text d-flex flex-column">
                        {skill.array.map((skill, index) => (
                          <span className="p-2" key={index}>
                            <a
                              className="text-dark text-decoration-none"
                              href={skill.link}
                              target="_blank"
                              rel="noreferrer"
                            >
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
