import React from "react";
import styled from "styled-components";

const SideComponent = () => (
  <Styles>
    <div orientation="left" className="side-left">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mayur-mule" title="LinkedIn" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/mayur1711" title="Github" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/mayur.mule.142" title="Facebook" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    <div orientation="right" className="side-right">
      <div className="">
        <a href="mailto:mayur17111996@gmail.com">mayur17111996@gmail.com</a>
      </div>
    </div>
  </Styles>
);

const Styles = styled.div`
  .side-left {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    color: var(--light-slate);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  ul::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }

  li:last-child {
    margin-bottom: 20px;
  }

  li a {
    display: inline-block;
    font-size: var(--fz-xxl);
    padding: 10px;
    cursor: ne-resize;
    color: var(--slate);
  }

  li a:hover {
    transform: translateY(-3px);
    color: var(--green);
  }

  .side-right {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: 40px;
    z-index: 10;
  }

  .side-right > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .side-right > div::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }

  .side-right a {
    color: var(--slate);
    cursor: ne-resize;
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
  }

  .side-right a:hover {
    transform: translateY(-3px);
    color: var(--green);
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    .side-left {
      left: 20px;
      right: auto;
    }

    .side-right {
      right: 20px;
      left: auto;
    }
  }

  @media (max-width: 768px) {
    .side-left,
    .side-right {
      display: none;
    }
  }
`;
export default SideComponent;
