import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import ballRaising from "./images/ballRaising.svg";

const Wrapper = styled.div`
  background-color: #ffffff;

  .aim-image {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .aimContent {
    margin-left: 9.6rem;
  }

  .caption {
    width: 50%;
    text-align: justify;
  }

  .equip {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .aim-image {
      grid-template-columns: 1fr;
    }

    .equip {
      width: 45%;
      text-align: center;
    }

    .caption {
      width: 45%;
      text-align: center;
    }

    .aimContent {
      margin-left: 2.4rem;
    }
  }
`;

const Aim = () => {
  return (
    <Wrapper className="aimWrapper  section" id="manifesto">
      {/* <img src={bgFeedback} alt="Cover" className="coverImage" /> */}
      <div className="aim-image">
        <div className="aimContent">
          <Spacer y={26.5} yMobile={7.2} />
          <h1 className="displayLarge equip">
            Equipping future generations for soccer excellence.
          </h1>
          <br />
          <h3 className="textMedium caption">
            We deploy every secret we know to help our trainees grasp the skills
            and techniques they need to get adept at the game of football.
          </h3>
          <Spacer y={26.5} yMobile={9.9} />
        </div>
        <div>
          <img
            src={ballRaising}
            alt="A player raising ball"
            className="player"
          />
        </div>
      </div>
      <Spacer y={4.8} />
    </Wrapper>
  );
};

export default Aim;
