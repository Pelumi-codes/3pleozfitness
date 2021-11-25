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

const One_One_Caption = () => {
  return (
    <Wrapper className="One_One_CaptionWrapper ">
      <Spacer y={9.6} />
      <h2 className="caption displayLarge">One-on-one coaching</h2>
      <Spacer y={4.8} />
    </Wrapper>
  );
};

export default One_One_Caption;
