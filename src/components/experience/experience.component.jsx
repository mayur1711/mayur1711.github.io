import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import styled from "styled-components";
import { experiences } from "./experience.data";

const ExperienceComponent = () => (
  <Styles>
    <h2 className="header-1 my-4">
      <i className="fas fa-briefcase"></i>&nbsp;&nbsp;Work Experience
    </h2>
    <Tab.Container id="company-tabs" defaultActiveKey={0}>
      <Row className="py-4">
        <Col sm={3} className="">
          <Nav variant="tabs" className="flex-column">
            {experiences.map((experience, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={index}>{experience.companyAlt ? experience.companyAlt : experience.company}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9} className="pt-5 pt-sm-0">
          <Tab.Content>
            {experiences.map((experience, index) => (
              <Tab.Pane key={index} eventKey={index}>
                <div>
                  <h4 className="header-2">
                    <span>{experience.designation}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={experience.companyUrl} rel="noopener noreferrer" target="_blank">
                        {experience.company}
                      </a>
                    </span>
                  </h4>
                  <p className="range">{experience.range}</p>
                  <div>
                    <ul className="description">
                      {experience.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Styles>
);

const Styles = styled.div`
  .nav-tabs {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    border: none;
  }

  .nav-link {
    padding: 0.5rem;
    color: var(--dark-slate);
    outline: none;
    border: none;
    border-left: 2px solid var(--lightest-slate);
    border-radius: 0;
  }

  .nav-link.active,
  .nav-link:hover,
  .nav-link:focus {
    color: var(--green);
    background: var(--green-tint);
  }

  .nav-link.active {
    border-left: 3px solid var(--green);
  }

  .company {
    color: var(--green);
  }

  .range {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .description {
    font-size: var(--fz-md);
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  li {
    padding-left: 1.5rem;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  li:before {
    color: var(--green);
    content: "\f0da";
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.5rem;
    width: 1.5rem;
  }

  .fas {
    color: var(--green);
  }

  @media (max-width: 576px) {
    .nav-tabs {
      flex-direction: row !important;
      overflow-x: auto;
      overflow-y: hidden;
      flex-wrap: nowrap;
    }

    .nav-item {
      white-space: nowrap;
    }

    .nav-link {
      padding: 0.5rem 1rem;
      border: none;
      border-bottom: 2px solid var(--lightest-slate);
    }

    .nav-link.active {
      border: none;
      border-bottom: 3px solid var(--green);
    }

    .description {
      font-size: var(--fz-sm);
    }
  }
`;

export default ExperienceComponent;
