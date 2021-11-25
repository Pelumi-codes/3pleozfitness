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
`;

const One_One = () => {
  return (
    <Wrapper className="One_OneWrapper container">
      <Spacer y={9.6} />
      <div className="aboutContent">
        <div className="aboutCaption">ABOUT</div>
        <div className="aboutDetails textSmall">
          <p>
            A comprehensive 1-hour session that includes an introduction to
            technique, fitness, and Game IQ.
            <br />
            <br />
            With our private coaching, players have our coaches’ 100% attention
            through the session; consequently, we are able to work
            collaboratively to achieve our players’ goals. <br />
            <br />
            The first two sessions are a holistic appraisal of skills, areas of
            strengths and weaknesses, as well as observation of clients’ needs.
            Following this, we create a training plan for players.
            <br />
            <br />
            Who is this plan suitable for? <br />
            <br />
            This is for anyone seeking the benefits of one-on-one coaching or
            whose preferred learning style is private.
          </p>
          <Spacer y={5.8} />
        </div>
        <div>
          <div className="cost">Cost</div>
          <Spacer y={2.4} />
          <div className="class">$60 / session ( 1 hour)</div>
          <Spacer y={0.6} />
          <div className="package">
            <span>Discounted </span> rate of $300 for 6 sessions
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

export default One_One;
