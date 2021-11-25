import React from "react";
import styled from "styled-components";
import Spacer from "../Spacer";
import Button from "../Button";

const Wrapper = styled.div`
  background-color: #ffffff;

  .aboutContent {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    text-align: justify;
  }

  .aboutDetails {
    text-align: justify;
    padding-right: 9.6rem;
  }

  .aboutCaption {
    font-family: var(--font_semi_bold);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
  }

  .cost,
  span {
    font-family: var(--font_semi_bold);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    color: #181813;
  }

  .class,
  .package,
  .bundle {
    font-family: var(--font_italic);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #181813;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    .aboutContent {
      grid-template-columns: 1fr;
      text-align: justify;
    }

    .aboutDetails {
      text-align: justify;
      padding-right: 0;
    }
  }
`;

const About = () => {
  return (
    <Wrapper className="aboutWrapper container">
      <Spacer y={9.6} />
      <div className="aboutContent">
        <div className="aboutCaption">ABOUT</div>
        <div className="aboutDetails textSmall">
          <p>
            A comprehensive introduction to technique, fitness and Game IQ.
            <br />
            <br />
            For those who prefer a group setting, the midweek class is the
            perfect plan for you. Twice a week, in three different locations
            across the DFW area, we have skills classes for one and a half hours
            ( our schedules and locations are updated weekly and this is
            communicated to parents timely). The focus here is technique, speed,
            agility and fitness. These are things most teams do not have enough
            time to focus on during club team training sessions. The emphasis
            here, I repeat, is technique. We believe that the more time you
            spend on the ball, the more comfortable you are manipulating it. In
            our skills classes, we have a coach to player ratio of 1 : 10, so we
            can closely monitor improvement and form to ensure that our players
            are getting the most out of their times, efforts and other resources
          </p>
          {/* <Spacer y={30.2} /> */}
        </div>
        <div>
          <div className="cost">Cost</div>
          <Spacer y={2.4} />
          <div className="class">$25 per class</div>
          <Spacer y={0.6} />
          <div className="package">
            <span>Package </span>$160 / month (8 classes: 2 per Week)
          </div>
          <Spacer y={0.6} />
          <div>
            <h4 className="package">
              <span>Welcome</span> Bundle $200
            </h4>
            <h4 className="package">What's included? </h4>
            <h4 className="package">8 classes ( value = $200)</h4>
            <h4 className="package">
              3pleOz Multifunctional Agility ladder and Jumprope Pack ( $50){" "}
            </h4>
            <h4 className="package">
              3pleOz Hex Agility rings / speed agility ring - set of 6($35)
            </h4>
            <h4 className="package">
              3pleOz Circular Agility rings - set of 6 ($25)
            </h4>
          </div>
          <Spacer y={4.8} />
          <div className="package">
            <span>Want to join?</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <Spacer y={4.8} />
          <Button normal text="Schedule session" />
          <Spacer y={9.6} />
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
