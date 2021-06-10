import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { projects } from "./projects.data";

const ProjectsComponent = () => (
  <Styles>
    <h2 className="header-1 my-4">
      <i className="far fa-folder-open"></i>&nbsp;&nbsp;Things I've Built
    </h2>
    <Row>
      {projects.map((project) => (
        <Col key={project.title} sm={6} lg={4} className="p-2">
          <Card className="h-100">
            <Card.Header className="pb-0 d-flex justify-content-between align-items-center">
              <i className="far fa-folder"></i>
              <span>
                <a href={project.github_link} title="GitHub" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.external_link} title="External Link" className="ml-3" rel="noopener noreferrer" target="_blank">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </span>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <a href={project.external_link} rel="noopener noreferrer" target="_blank">
                  <h4 className="header-2">{project.title}</h4>
                </a>
              </Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="pt-0">
              <ul>
                {project.tech_stack.map((tech) => (
                  <li key={tech} className="mr-3">
                    {tech}
                  </li>
                ))}
              </ul>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  </Styles>
);

const Styles = styled.div`
  .row {
    margin: -0.5rem !important;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .card {
    transition: var(--transition);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .card-body a {
    position: static;
  }

  .card-body a::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  .card-text {
    font-size: var(--fz-sm);
  }

  .card-header,
  .card-footer {
    background: none;
    border: none;
  }

  .card-header span a {
    z-index: 1;
  }

  a {
    cursor: ne-resize;
  }

  a:hover {
    text-decoration: none;
  }

  a:hover h4 {
    color: var(--green);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
    list-style: none;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  .far {
    color: var(--green);
  }

  .fa-folder {
    font-size: var(--fz-header-1);
  }

  .fa-github,
  .fa-external-link-alt {
    font-size: var(--fz-xl);
    color: var(--slate);
  }

  .fa-github:hover,
  .fa-external-link-alt:hover {
    color: var(--green);
  }
`;

export default ProjectsComponent;
