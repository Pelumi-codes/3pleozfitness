import React from "react";
import Spacer from "../Spacer";
import Button from "../Button";
import PlanDetails from "../PlanDetails";

const OneOnOneDetails = () => {
  return (
    <PlanDetails>
      <div>
        <h1 className="textLarge textBold">ABOUT</h1>
      </div>
      <div>
        <p className="textSmall">
          A comprehensive 1-hour session that includes an introduction to
          technique, fitness, and Game IQ.
        </p>
        <Spacer y={2.4} />
        <p className="textSmall">
          With our private coaching, players have our coaches’ 100% attention
          through the session; consequently, we are able to work collaboratively
          to achieve our players’ goals.
        </p>
        <Spacer y={2.4} />
        <p className="textSmall">
          The first two sessions are a holistic appraisal of skills, areas of
          strengths and weaknesses, as well as observation of clients’ needs.
          Following this, we create a training plan for players.
        </p>
        <Spacer y={2.4} />
        <p className="textSmall">Who is this plan suitable for?</p>
        <Spacer y={2.4} />
        <p className="textSmall">
          This is for anyone seeking the benefits of one-on-one coaching or
          whose preferred learning style is private.
        </p>
      </div>
      <div>
        <p className="textSmallBold">COST</p>
        <Spacer y={2.4} />
        <p className="textSmall">$60 / session ( 1 hour)</p>
        <Spacer y={0.6} />
        <p className="textSmall">
          <b>Discounted rate </b>of $300 for 6 sessions{" "}
        </p>
        <Spacer y={4.8} />
        <div className="divider"></div>
        <Spacer y={4.8} />
        <p className="textSmall">
          <b>Want to join?</b> Enrol in our one-on-one coaching classes to enjoy
          training that is designed just for you and focuses on your specific
          needs.
        </p>
        <Spacer y={4.8} />
        <Button
          as="a"
          href="https://3pleozfitness.com/collections/soccer-coaching-plans"
          target="_blank"
          normal
          text="Schedule Session"
        />
      </div>
    </PlanDetails>
  );
};

export default OneOnOneDetails;
