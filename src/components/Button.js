import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4rem;
  align-items: center;
  border: none;
  padding: 1.4rem 2.4rem;

  outline: none;
  height: ${(props) => (props.normal ? "5.6rem" : "8.8rem")};
  width: ${(props) =>
    props.fullWidth ? "14.5rem" : props.maxWidth ? "24rem" : "max-content"};
  background-color: #3ffe1b;
  color: #155509;

  .text {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    width: max-content;
  }
`;

const Button = ({ text, ...props }) => {
  return (
    <Wrapper {...props}>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default Button;
