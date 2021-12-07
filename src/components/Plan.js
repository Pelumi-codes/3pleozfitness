import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import midweek_skills_main from "./images/midweek_skills_main.jpg";
import one_on_one_main from "./images/one_on_one_main.jpg";
import camps_and_clinics_main from "./images/camps_and_clinics_main.jpg";
import ball_one from "./images/ball_one.png";
import ball_two from "./images/ball_two.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #181813;
  overflow: hidden;
  position: relative;

  .contentWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 6rem;
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .contentWrapper {
      grid-template-columns: unset;
      display: flex;
      flex-direction: column;
    }
  }
`;

const CoachingPlan = styled.div`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4.8rem;

  &.right {
    grid-column: 2/4;
  }

  .imgWrapper {
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid #ffffff;
  }

  .circleImg {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-column: unset;
    grid-template-columns: unset;
    display: flex;
    flex-direction: column;

    &.right {
      flex-direction: column-reverse;
    }

    .imgWrapper {
      width: 20rem;
    }
  }
`;

const SwerveBall = styled.img`
  position: absolute;
  z-index: 1;
  opacity: 0.05;

  &.topRight {
    top: 0;
    right: 0;
  }

  &.center {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  &.bottomRight {
    bottom: 0;
    right: -40rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Plan = () => {
  return (
    <Wrapper className="aimWrapper container" id="coachingPlans">
      {/* Swerve balls */}
      <SwerveBall src={ball_one} alt="swerve ball" className="topRight" />
      <SwerveBall src={ball_two} alt="swerve ball" className="center" />
      <SwerveBall src={ball_two} alt="swerve ball" className="bottomRight" />

      <Spacer y={14.4} yMobile={7.2} />
      <h1 className="colorWhite displayMediumBold">
        Soccer <br /> Coaching Plans
      </h1>
      <Spacer y={6} />
      <div className="contentWrapper">
        <CoachingPlan>
          <div className="imgWrapper">
            <img
              src={one_on_one_main}
              alt="players on the pitch"
              className="circleImg"
            />
          </div>
          <div className="flexColumn colorWhite">
            <h3 className="displayLargeBold">One-on-one coaching</h3>
            <Spacer y={1} />
            <p className="textMedium">
              Experience detailed coaching that leverages individualized
              evaluation and teaching to deliver effective coaching sessions.
            </p>
            <Spacer y={4.8} yMobile={2.4} />
            <Link to="/one-on-one" className="learnMore">
              <Button fullWidth normal text="Learn More" />
            </Link>
          </div>
        </CoachingPlan>
        <CoachingPlan className="right">
          <div className="flexColumn colorWhite">
            <h3 className="displayLargeBold">Midweek skills class</h3>
            <Spacer y={1} />
            <p className="textMedium">
              Reinforce your skills with group-based coaching which offers an
              opportunity for collaboration, communication and feedback.
            </p>
            <Spacer y={4.8} yMobile={2.4} />
            <Link to="/midweek-skills" className="learnMore">
              <Button fullWidth normal text="Learn More" />
            </Link>
          </div>
          <div className="imgWrapper">
            <img
              src={midweek_skills_main}
              alt="players on the pitch"
              className="circleImg"
            />
          </div>
        </CoachingPlan>
        <CoachingPlan>
          <div className="imgWrapper">
            <img
              src={camps_and_clinics_main}
              alt="players on the pitch"
              className="circleImg"
            />
          </div>
          <div className="flexColumn colorWhite">
            <h3 className="displayLargeBold">Camps and clinics</h3>
            <Spacer y={1} />
            <p className="textMedium">
              Explore our customized, intensive coaching sessions specially
              designed to serve larger groups and create an enabling atmosphere
              for communal learning within a targeted timespan
            </p>
            <Spacer y={4.8} yMobile={2.4} />
            <Link to="/camps-and-clinics" className="learnMore">
              <Button fullWidth normal text="Learn More" />
            </Link>
          </div>
        </CoachingPlan>
      </div>
      <Spacer y={9.6} yMobile={4.8} />
    </Wrapper>
  );
};

export default Plan;
