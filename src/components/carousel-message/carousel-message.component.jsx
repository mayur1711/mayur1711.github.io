import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const CarouselMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const CarouselMessageComponent = () => (
  <CarouselMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Mayur Mule</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "SharePoint Developer",
                "Self-Learner",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  </CarouselMessage>
);

export default CarouselMessageComponent;
