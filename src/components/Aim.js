import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import baller_one from "./images/baller_one.png";
import baller_two from "./images/baller_two.png";
import baller_three from "./images/baller_three.png";
import baller_four from "./images/baller_four.png";
import swerveBall from "./images/ball_two.png";
import { useEffect, useMemo, useState } from "react";

const Wrapper = styled.div`
  background-color: transparent;
  position: relative;
  margin-bottom: -3px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #faf6f3;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
    z-index: -1;
  }

  .swerveBall {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.05;
  }

  .aimContent {
    margin-left: 9.6rem;
    position: relative;
    z-index: 2;
    max-width: 46.8rem;
  }

  .sideImage {
    width: 50%;
    position: relative;
    z-index: 2;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .contentWrapper {
      flex-direction: column;
    }

    .sideImage {
      width: 100%;
    }

    .aimContent {
      margin: 7.2rem 0;
      padding: 0 2.4rem;
      max-width: unset;
      width: 100%;
    }

    .swerveBall {
      height: 20.9rem;
    }
  }
`;

const ballers = [baller_one, baller_two, baller_three, baller_four];

const Aim = () => {
  const [baller, setBaller] = useState(0);

  const switchBaller = () => {
    if (baller >= 3) {
      setBaller(0);
    } else {
      setBaller((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(switchBaller, 2000);

    return () => clearInterval(interval);
  }, [baller]);

  return (
    <Wrapper className="aimWrapper" id="manifesto">
      <img src={swerveBall} alt="Swerve ball" className="swerveBall" />
      <div className="flexRow alignCenter justifySpaceBetween contentWrapper">
        <div className="aimContent">
          <h1 className="displayLarge">
            Equipping future generations for soccer excellence.
          </h1>
          <br />
          <h3 className="textMedium">
            We deploy every secret we know to help our trainees grasp the skills
            and techniques they need to get adept at the game of football.
          </h3>
          {/* <Spacer y={26.5} yMobile={9.9} /> */}
        </div>
        <div className="sideImage">
          <img src={ballers[baller]} alt="Baller" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Aim;
