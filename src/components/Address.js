import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";

const Wrapper = styled.div`
  background-color: #ffffff;

  .address {
    width: 45%;
  }

  p {
    width: 50%;
    text-align: justify;
    color: #155509;
    font-family: var(--font_italic);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .address {
      width: 100%;
    }

    p {
      width: 100%;
      text-align: justify;
      color: #155509;
      font-family: var(--font_italic);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0em;
    }
  }
`;

const Address = () => {
  return (
    <Wrapper className="addressWrapper container">
      <p>
        Our training sessions are designed to help every trainee learn the
        rudiments of the game, build their endurance and agility as well as
        understand the tactics that make for excellent sportsmanship. Register
        today to get started on a life-changing journey.{" "}
      </p>
      <Spacer y={4.8} />
      <h2 className="textLarge address">
        2810 Routh Creek Parkway, Richardson, TX. 75082. USA
      </h2>
      <Spacer y={1.5} />
      <h2 className="textLarge">+1-469-347-2236</h2>
      <h2 className="textLarge">customerservice@3pleozfitness.com</h2>
      <Spacer y={7.2} />
    </Wrapper>
  );
};

export default Address;
