import React from "react";
import styled from "styled-components";
import * as constants from "../../constants/constants";

const ContactComponent = () => (
  <Styles>
    <h2 className="header-1 my-4">
      <i className="far fa-address-book"></i>&nbsp;&nbsp;Reach Out
    </h2>
    <p className="py-4">
      Mauris pulvinar magna nec aliquam volutpat. Vestibulum tristique nisi quis nibh vestibulum imperdiet. Praesent nec dolor vitae lorem
      auctor fermentum nec sed lorem. Phasellus consectetur ultricies hendrerit.
    </p>
    <a href={`mailto:${constants.EMAIL_ID}`} className="email-btn btn">
      Send Message
    </a>
  </Styles>
);

const Styles = styled.div`
  .header-1::before {
    content: "";
    display: block;
    position: relative;
    top: 0px;
    width: 100%;
    height: 2px;
    margin-right: 20px;
    background-color: var(--lightest-slate);
  }

  .far {
    color: var(--green);
  }
`;

export default ContactComponent;
