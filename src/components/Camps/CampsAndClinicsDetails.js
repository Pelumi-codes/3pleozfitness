import React from "react";
import Spacer from "../Spacer";
import Button from "../Button";
import PlanDetails from "../PlanDetails";

const CampsAndClinicsDetails = () => {
  return (
    <PlanDetails>
      <div>
        <h1 className="textLarge textBold">ABOUT</h1>
      </div>
      <div>
        <p className="textSmall">
          At 3pleOz, we offer seasonal camps which include summer and winter
          3-day intensive camps, weekend clinics, etc. While we are local to the
          Dallas-Fort Worth area, as a business, we are constantly growing and
          expanding our reach to serve as many players as possible, in an effort
          to expose them to the proper way to train and see measurable results.
          For this reason, our camps and clinics are open to players from all
          over the nation. Furthermore, we work with clubs and other elite
          coaches to serve the needs of their teams and clients, respectively
        </p>
      </div>
      <div>
        <p className="textSmallBold">LOCATION</p>
        <Spacer y={2.4} />
        <p className="textSmall">Allen</p>
        <Spacer y={0.6} />
        <p className="textSmall">Allenarlington</p>
        <Spacer y={0.6} />
        <p className="textSmall">Rockwell</p>
        <Spacer y={4.8} />
        <div className="divider"></div>
        <Spacer y={4.8} />
        <p className="textSmall">
          For questions about camps and clinics, please email{" "}
          <a
            href="mailto:customerservice@3pleozfitness.co"
            className="textBold"
          >
            customerservice@3pleozfitness.co
          </a>{" "}
          with the Subject line “Camps and Clinics” (optional).
        </p>
        <Spacer y={4.8} />
        <Button as="a" href="/#contactUs" normal text="Contact us" />
      </div>
    </PlanDetails>
  );
};

export default CampsAndClinicsDetails;
