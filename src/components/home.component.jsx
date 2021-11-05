import React from "react";
import styled from "styled-components";
import * as constants from "../constants/constants";

const HomeComponent = () => (
  <>
    <Styles>
      <div>
        <h6>Hi, my name is</h6>
      </div>
      <div>
        <h2>Mayur Mule.</h2>
      </div>
      <div>
        <h3>I solve logical puzzles for breakfast :)</h3>
      </div>
      <div>
        <p>
          I'm a graduate student at University of Illinois Chicago. Previously, I worked as a Software Engineer with Accenture Solutions. I
          like to stay abreast of the latest technological trends and employ my technical acumen and skills to solve complex and challenging
          problems related to IT.
        </p>
      </div>
      <div>
        <a href={`mailto:${constants.EMAIL_ID}`} className="green-btn btn">
          Reach Out
        </a>
      </div>
    </Styles>
  </>
);

const Styles = styled.div`
  h6 {
    margin: 30px 0px;
    font-family: var(--font-mono);
    font-weight: 400;
    color: var(--green);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  }

  h2 {
    margin: 0px 0px 10px 0px;
    font-size: clamp(40px, 8vw, 80px);
    color: var(--light-navy);
  }

  h3 {
    margin: 0px 0px 20px 0px;
    font-size: clamp(40px, 8vw, 80px);
    line-height: 0.9;
  }

  p {
    max-width: 500px;
    margin: 0px 0px 50px 0px;
  }
`;

export default HomeComponent;
