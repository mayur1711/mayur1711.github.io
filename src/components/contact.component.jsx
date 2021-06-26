import React from "react";
import styled from "styled-components";
import * as constants from "../constants/constants";

const ContactComponent = () => (
  <Styles>
    <h2 className="header-1 my-4">
      <i className="far fa-address-book"></i>&nbsp;&nbsp;Reach Out
    </h2>
    <p className="py-4">Need something built or simply want to have chat? Reach out to me on social media or send me an email.</p>
    <a href={`mailto:${constants.EMAIL_ID}`} className="green-btn btn">
      Send Mail
    </a>
  </Styles>
);

const Styles = styled.div`
  .header-1::before {
    content: "";
    display: block;
    position: relative;
    top: -4px;
    width: 100%;
    height: 2px;
    margin-right: 20px;
    background-color: var(--lightest-slate);
  }

  .far {
    color: var(--green);
    font-size: var(--fz-xxxl);
    display: flex;
    align-self: start;
  }
`;

export default ContactComponent;
