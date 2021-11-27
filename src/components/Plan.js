import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import circleOne from "./images/circleOne.svg";
import football from "./images/football.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import ballPitch from "./images/ballPitch.svg";

const Wrapper = styled.div`
  background-color: #181813;

  .aim-image {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .aimContent {
    margin-left: 9.6rem;
  }

  .caption {
    width: 50%;
  }

  .players {
    margin-right: 4.8rem;
  }

  .aim-image {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .content {
    width: 40%;
    text-align: justify;
  }

  .setionTwo {
    margin-left: 43.9rem;
  }

  .playerTwo {
    margin-left: 4.8rem;
  }

  .aim-image-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .contentTwo {
    width: 100%;
    text-align: justify;
  }

  .captionTwo {
    white-space: nowrap;
  }

  img {
    width: 300px;
    height: 300px;
  }

  .contentThree {
    width: 36%;
    text-align: justify;
  }

  .aimImageSmall {
    display: none;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .aim-image {
      grid-template-columns: 1fr;
    }

    .caption {
      width: 45%;
      text-align: center;
    }

    .aimContent {
      //   margin-left: 2.4rem;
      margin: 0 auto;
    }

    .aim-image-two {
      display: none;
    }

    .aimImageSmall {
      display: block;
    }

    .aim-image-two {
      grid-template-columns: 1fr;
    }

    .players,
    .playerTwo {
      margin-left: 0;
    }

    .content,
    .contentThree {
      width: 80%;
      text-align: justify;
    }

    .setionTwo {
      margin-left: 43.9rem;
    }

    .captionActive {
      br {
        display: none;
      }
    }
  }
`;

const Plan = () => {
  return (
    <Wrapper className="aimWrapper container" id="plan">
      <Spacer y={14.4} />
      {/* <img src={bgFeedback} alt="Cover" className="coverImage" /> */}
      <h1 className="colorWhite displayMediumBold">
        Soccer <br /> Coaching Plans
      </h1>
      <Spacer y={6.2} />
      <div className="aim-image">
        <div className="aimContent">
          <img src={circleOne} alt="players on the pitch" className="players" />
        </div>
        <div className="flexColumn  colorWhite">
          <Spacer yMobile={2.4} />
          <div className="textBold captionActive">
            One-on-one <br /> coaching
          </div>
          <Spacer y={0.2} />
          <div>
            <p className="textMedium content">
              With our private coaching, players have our coaches’ 100%
              attention through the session; consequently, we are able to work
              collaboratively to achieve our players’ goals.
            </p>
            <Spacer y={4.8} />
            <div>
              <Link to="/One-on-One" className="learnMore">
                <Button fullWidth normal text="Learn More" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={8.5} yMobile={4.8} />

      <div className="aim-image-two">
        <div className="flexColumn  colorWhite setionTwo">
          <div className="textBold captionTwo">
            Midweek Skills <br /> Class
          </div>
          <Spacer y={0.2} />
          <div>
            <p className="textMedium contentTwo">
              For those who prefer a group setting, the midweek class is the
              perfect plan for you. Twice a week, in three different locations
              across the DFW area.
            </p>
            <Spacer y={4.8} yMobile={2.4} />
            <div>
              <Link to="/About-Us" className="learnMore">
                <Button fullWidth normal text="Learn More" />
              </Link>
            </div>
          </div>
        </div>
        <div className="aimContent">
          <img
            src={football}
            alt="players on the pitch"
            className="playerTwo"
          />
        </div>
      </div>
      <Spacer y={9} yMobile={4.8} />

      <div className="aimImageSmall">
        <div className="aimContent">
          <img src={circleOne} alt="players on the pitch" className="players" />
        </div>
        <Spacer yMobile={2.4} />
        <div className="flexColumn  colorWhite">
          <div className="textBold captionActive">
            Midweek Skills <br /> Class
          </div>
          <Spacer y={0.2} />
          <div>
            <p className="textMedium contentThree">
              For those who prefer a group setting, the midweek class is the
              perfect plan for you. Twice a week, in three different locations
              across the DFW area.
            </p>
            <Spacer y={4.8} />
            <div>
              <Link to="/Camps-And-Picnic" className="learnMore">
                <Button fullWidth normal text="Learn More" />
              </Link>
            </div>
            <Spacer yMobile={4.8} />
          </div>
        </div>
      </div>

      <div className="aim-image">
        <div className="aimContent">
          <img src={ballPitch} alt="players on the pitch" className="players" />
        </div>
        {/* <Spacer yMobile={2.4} /> */}
        <div className="flexColumn  colorWhite">
          <div className="textBold captionActive">
            Camps and <br />
            Clinics
          </div>
          <Spacer y={0.2} />
          <div>
            <p className="textMedium contentThree">
              At 3pleOz, we offer seasonal camps, which include summer and
              winter 3-day , intensive camps, weekend clinics, etc.
            </p>
            <Spacer y={4.8} />
            <div>
              <Link to="/Camps-And-Picnic" className="learnMore">
                <Button fullWidth normal text="Learn More" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={9.5} yMobile={4.8} />
    </Wrapper>
  );
};

export default Plan;
