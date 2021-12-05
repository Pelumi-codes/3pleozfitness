import React from "react";
import Spacer from "../Spacer";
import Button from "../Button";
import PlanDetails from "../PlanDetails";

const MidweekDetails = () => {
  return (
    <PlanDetails>
      <div>
        <h1 className="textLarge textBold">ABOUT</h1>
      </div>
      <div>
        <p className="textSmall">
          A comprehensive introduction to technique, fitness and Game IQ.
        </p>
        <Spacer y={2.4} />
        <p className="textSmall">
          For those who prefer a group setting, the midweek class is the perfect
          plan for you. Twice a week, in three different locations across the
          DFW area, we have skills classes for one and a half hours ( our
          schedules and locations are updated weekly and this is communicated to
          parents timely). The focus here is technique, speed, agility and
          fitness. These are things most teams do not have enough time to focus
          on during club team training sessions. The emphasis here, I repeat, is
          technique. We believe that the more time you spend on the ball, the
          more comfortable you are manipulating it. In our skills classes, we
          have a coach to player ratio of 1 : 10, so we can closely monitor
          improvement and form to ensure that our players are getting the most
          out of their times, efforts and other resources
        </p>
      </div>
      <div>
        <p className="textSmallBold">COST</p>
        <Spacer y={2.4} />
        <p className="textSmall">$25 per class</p>
        <Spacer y={0.6} />
        <p className="textSmall">
          <b>Package</b> $160 / month (8 classes: 2 per Week)
        </p>
        <Spacer y={0.6} />
        <p className="textSmall">
          <b>Welcome Bundle</b> $200 <br />
          What's included? <br />
          8 classes ( value = $200)
          <br />
          3pleOz Multifunctional Agility ladder &amp; Jumprope Pack ( $50)
          <br />
          3pleOz Hex Agility rings / speed agility ring - set of 6($35)
          <br />
          3pleOz Circular Agility rings - set of 6 ($25)
        </p>
        <Spacer y={4.8} />
        <div className="divider"></div>
        <Spacer y={4.8} />
        <p className="textSmall">
          <b>Want to join?</b> Sign up for our Midweek Skills Class to
          experience regular and consistent training that helps you enhance your
          skills.
        </p>
        <Spacer y={4.8} />
        <Button as="a" href="/" normal text="Schedule Session" />
      </div>
    </PlanDetails>
  );
};

export default MidweekDetails;
