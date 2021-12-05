import styled from "styled-components";

const PlanDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  grid-gap: 9.6rem;
  padding: 9.6rem;

  .divider {
    border-top: 1px solid #efefef;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2.4rem;
    padding: 9.6rem 2.4rem;
  }
`;

export default PlanDetails;
