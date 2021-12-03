import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import circleSnap_one from "./images/circleSnap_one.png";
import circleSnap_two from "./images/circleSnap_two.png";
import circleSnap_three from "./images/circleSnap_three.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #181813;
  overflow: hidden;

  .contentWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 6rem;
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
  }

  .circleImg {
    width: 100%;
    aspect-ratio: 1/1;
  }

  @media screen and (max-width: 768px) {
    grid-column: unset;
    grid-template-columns: unset;
    display: flex;
    flex-direction: column;

    &.right {
      flex-direction: column-reverse;
    }

    .circleImg {
      width: 20rem;
    }
  }
`;

const Plan = () => {
  return (
    <Wrapper className="aimWrapper container" id="coachingPlans">
      <Spacer y={14.4} yMobile={7.2} />
      <h1 className="colorWhite displayMediumBold">
        Soccer <br /> Coaching Plans
      </h1>
      <Spacer y={6} />
      <div className="contentWrapper">
        <CoachingPlan>
          <div className="imgWrapper">
            <img
              src={circleSnap_one}
              alt="players on the pitch"
              className="circleImg"
            />
          </div>
          <div className="flexColumn colorWhite">
            <h3 className="textBold">One-on-one coaching</h3>
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
            <h3 className="textBold">Midweek skills class</h3>
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
              src={circleSnap_two}
              alt="players on the pitch"
              className="circleImg"
            />
          </div>
        </CoachingPlan>
        <CoachingPlan>
          <div className="imgWrapper">
            <img
              src={circleSnap_three}
              alt="players on the pitch"
              className="circleImg"
            />
          </div>
          <div className="flexColumn colorWhite">
            <h3 className="textBold">Camps and clinics</h3>
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
