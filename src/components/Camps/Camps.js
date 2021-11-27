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

const Address = () => {
  return (
    <Wrapper className="addressWrapper container">
      <Spacer y={9.6} />
      <div className="aboutContent">
        <div className="aboutCaption">ABOUT</div>
        {/* <Spacer yMobile={2.4} /> */}
        <div className="aboutDetails textSmall">
          <p>
            At 3pleOz, we offer seasonal camps, which include summer and winter
            3-day , intensive camps, weekend clinics, etc. While we are local to
            the Dallas-Fort Worth area, as a business, we are constantly growing
            and expanding our reach to serve as many players as possible, in an
            effort to expose them to the proper way to train and see measurable
            results. For this reason, our camps and clinics are open to players
            from all over the nation. Furthermore, we work with clubs and other
            elite coaches to serve the needs of their teams and clients,
            respectively
          </p>
          <Spacer y={30.2} yMobile={2.4} />
        </div>
        <div>
          <div className="cost">LOCATION</div>
          <Spacer y={2.4} />
          <div className="class">Allen</div>
          <Spacer y={0.6} />
          <div className="package">Allenarlington</div>
          <Spacer y={0.6} />
          <div>
            <h4 className="package">Rockwell</h4>
          </div>
          <Spacer y={4.8} />
          <div className="package">
            For questions about camps and clinics, please email
            customerservice@3pleozfitness.co with the Subject line “Camps and
            Clinics” (optional).
          </div>
          <Spacer y={4.8} />
          <Button normal text="Contact us" />
          <Spacer y={9.6} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Address;
