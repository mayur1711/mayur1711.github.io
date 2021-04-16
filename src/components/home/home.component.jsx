import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import styled from "styled-components";
import slide from "../../assets/img/home/slide-1.jpg";
import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";

const StyledDiv = styled.div`
  .jumbotron {
    background-image: url(${slide});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
  }

  .main {
    font-size: 50px;
  }

  .sub {
    font-size: 27px;
    letter-spacing: 2px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .arrow {
    text-align: center;
    margin: 50px 0;
  }

  .bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
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

const HomeComponent = () => {
  return (
    <div id="home">
      <StyledDiv>
        <Jumbotron
          fluid
          className="vh-100 w-100 m-0 p-0 d-flex align-items-end text-center"
        >
          <Container fluid>
            <div className="main mb-3">Mayur Mule</div>
            <div className="sub">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full Stack Developer",
                    "SharePoint Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
            <div className="arrow bounce">
              <a className="fa fa-arrow-down fa-2x" href="#about"></a>
            </div>
          </Container>
        </Jumbotron>
      </StyledDiv>
    </div>
  );
};

export default HomeComponent;
