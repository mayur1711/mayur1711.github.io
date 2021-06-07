import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const ProjectsComponent = () => (
  <Styles>
    <Row className="m-0 py-4">
      <Col className="px-0">
        <h2 className="header-1">
          <i class="far fa-folder-open"></i>&nbsp;&nbsp;Projects
        </h2>
      </Col>
    </Row>
    <Row className="m-0 py-4">
      <Col className="px-0"></Col>
    </Row>
  </Styles>
);

const Styles = styled.div`
  .far {
    color: var(--green);
  }
`;

export default ProjectsComponent;
