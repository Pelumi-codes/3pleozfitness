import React from "react";
import styled from "styled-components";
import Spacer from "../Spacer";

const Wrapper = styled.div`
  background-color: #155509;

  .caption {
    text-align: center;
    font-family: var(--font_semi_bold);
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
  }

  @media screen and (max-width: 768px) {
  }
`;

const Camps_Caption = () => {
  return (
    <Wrapper className="Camps_CaptionWrapper ">
      <Spacer y={9.6} />
      <h2 className="caption displayLarge">Camps and Clinics</h2>
      <Spacer y={4.8} />
    </Wrapper>
  );
};

export default Camps_Caption;
