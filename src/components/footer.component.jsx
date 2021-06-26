import React from "react";
import styled from "styled-components";
import * as constants from "../constants/constants";

const FooterComponent = () => (
  <Styles>
    <div className="social-links">
      <ul>
        <li>
          <a href={constants.LINKEDIN_LINK} title="LinkedIn" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href={constants.GITHUB_LINK} title="Github" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href={constants.FB_LINK} title="Facebook" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href={constants.INSTA_LINK} title="Instagram" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="credit">
      <a href="https://github.com/mayur1711/mayur1711.github.io" target="_blank" rel="noreferrer">
        Designed & Built by Mayur Mule
      </a>
    </div>
    <a className="visit-tracker" href={constants.CLUSTER_MAPS_HREF} target="_blank" title="Visit tracker" rel="noreferrer">
      <img src={constants.CLUSTER_MAPS_SRC} alt="Visit tracker" />
    </a>
  </Styles>
);

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 60px;
  text-align: center;

  .social-links {
    display: none;
    width: 100%;
    max-width: 270px;
    margin: 0px auto 10px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  .social-links a {
    color: var(--slate);
    cursor: ne-resize;
    padding: 10px;
    font-size: var(--fz-xxxl);
  }

  .credit a {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    cursor: ne-resize;
    color: var(--slate);
    padding: 10px;
  }

  .credit a:hover,
  .social-links a:hover {
    text-decoration: none;
    color: var(--green);
  }

  .visit-tracker {
    margin-top: 20px;

    img {
      width: 100px !important;
    }
  }

  .far {
    color: var(--green);
  }

  @media (max-width: 768px) {
    .social-links {
      display: block;
    }
  }
`;

export default FooterComponent;
