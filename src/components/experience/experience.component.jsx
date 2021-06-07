import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import styled from "styled-components";

const ExperienceComponent = () => (
  <Styles>
    <h1 className="header-1 my-4">
      <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Experience
    </h1>
    <Row className="m-0 py-4">
      <Col className="px-0">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="m-0">
            <Col sm={3} className="px-0 pr-sm-3">
              <Nav variant="tabs" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Accenture - SE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Accenture - ASE</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="px-0 pl-sm-3 pt-5 pt-sm-0">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div>
                    <h4 className="header-2">
                      <span>Software Engineer</span>
                      <span class="company">
                        &nbsp;@&nbsp;
                        <a href="https://www.accenture.com/" class="inline-link" rel="noopener noreferrer" target="_blank">
                          Accenture
                        </a>
                      </span>
                    </h4>
                    <p class="range">January 2020 - June 2021</p>
                    <div>
                      <ul>
                        <li>
                          Aliquam eget sem velit. Proin ac blandit mi, eget porttitor magna. Morbi et orci eu velit dignissim pharetra
                          ullamcorper ac quam.
                        </li>
                        <li>Integer fermentum euismod commodo. Mauris vel enim nec risus convallis elementum nec a lectus.</li>
                        <li>Suspendisse euismod, dui id convallis imperdiet, orci turpis tempor tellus, et auctor nisi dui a libero. </li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <h4 className="header-2">
                      <span>Associate Software Engineer</span>
                      <span class="company">
                        &nbsp;@&nbsp;
                        <a href="https://www.accenture.com/" class="inline-link" rel="noopener noreferrer" target="_blank">
                          Accenture
                        </a>
                      </span>
                    </h4>
                    <p class="range">August 2018 - December 2019</p>
                    <div>
                      <ul>
                        <li>
                          Aliquam eget sem velit. Proin ac blandit mi, eget porttitor magna. Morbi et orci eu velit dignissim pharetra
                          ullamcorper ac quam.
                        </li>
                        <li>Integer fermentum euismod commodo. Mauris vel enim nec risus convallis elementum nec a lectus.</li>
                        <li>Suspendisse euismod, dui id convallis imperdiet, orci turpis tempor tellus, et auctor nisi dui a libero. </li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Col>
    </Row>
  </Styles>
);

const Styles = styled.div`
  .nav-tabs {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
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
    font-size: var(--fz-sm);
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
    content: "\f0da"; /* FontAwesome Unicode */
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.5rem; /* same as padding-left set on li */
    width: 1.5rem; /* same as padding-left set on li */
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
  }
`;

export default ExperienceComponent;
