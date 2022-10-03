import React from 'react';
import styled from 'styled-components';
import * as constants from '../constants/constants';

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
          I'm a graduate student at The University of Illinois Chicago. My latest work experience includes working as Software Engineer Intern with
          PayPal. I like to stay abreast of the latest technological trends and employ my technical skills and knowledge to solve challenging
          problems.
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
    max-width: 600px;
    margin: 0px 0px 50px 0px;
  }
`;

export default HomeComponent;
