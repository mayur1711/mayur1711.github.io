import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import slide from "../../assets/img/home/slide-1.jpg";

const StyledDiv = styled.div`
  .jumbotron {
    background: url(${slide}) no-repeat #3f3f3f;
    background-size: cover;
    background-position: center center;
    background-repeat: ;
    color: #faf550;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    letter-spacing: 7px;
  }

  .primary-text {
    font-size: 3rem;
  }

  .secondary-text {
    font-size: 1.7rem;
    letter-spacing: 2px;
  }

  .underline {
    border-bottom: 1px solid #faf550;
  }

  .bounce {
    animation: bounce 2s infinite;
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
  }

  .bounce a {
    color: #ddd;
    text-decoration: none;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const HomeComponent = () => (
  <>
    <StyledDiv>
      <Jumbotron fluid className="d-flex align-items-end text-center vh-100 w-100 m-0 p-0">
        <Container>
          <div className="primary-text mb-3">
            <span className="underline pb-3">&nbsp;Mayur Mule&nbsp;</span>
          </div>
          <div className="secondary-text">
            <Typewriter
              options={{
                strings: ["Software Engineer", "Full Stack Developer", "SharePoint Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <div className="bounce text-center p-5">
            <a className="fa fa-arrow-down fa-3x" href="#about">
              {" "}
            </a>
          </div>
        </Container>
      </Jumbotron>
    </StyledDiv>
  </>
);

export default HomeComponent;
