import React from "react";
import styled from "styled-components";

const HomeComponent = () => (
  <>
    <Styles>
      <div>
        <h6>Hi, my name is</h6>
      </div>
      <div>
        <h1>Mayur Mule.</h1>
      </div>
      <div>
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor auctor diam et varius. Nam quis sagittis lacus. Mauris
          nec vestibulum metus, eu feugiat ante. Nunc nec ligula dapibus, efficitur lectus at, rutrum turpis. Sed iaculis
        </p>
      </div>
      <div>
        <a href="mailto:mayur17111996@gmail.com" class="btn">
          Reach Out
        </a>
      </div>
    </Styles>
  </>
);

const Styles = styled.div`
  h6 {
    margin: 0px 0px 25px 0px;
    font-family: var(--font-mono);
    font-weight: 400;
    color: var(--green);
  }

  h1 {
    margin: 0px 0px 20px 0px;
    font-size: clamp(30px, 8vw, 60px);
    color: var(--light-navy);
  }

  h2 {
    margin: 0px 0px 30px 0px;
    font-size: clamp(25px, 7vw, 55px);
  }

  p {
    max-width: 500px;
    margin: 0px 0px 50px 0px;
  }

  .btn {
    padding: 0.5rem 1rem;
    color: var(--green);
    border-color: var(--green);
  }

  .btn:hover,
  .btn:focus {
    background-color: var(--green-tint);
    box-shadow: 0 0 0 0.2rem var(--green-tint);
    outline: none;
  }
`;

export default HomeComponent;
