import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "./images/hamburger.jpeg";

const Wrapper = styled.div`
  background-color: #155509;

  .active {
    color: #155509;
  }

  .list {
    color: #8d9091;
  }

  .border {
    background-color: white;
    border-radius: 40px;
    margin-top: 2.4rem;
  }

  .logo {
    margin-right: 42rem;
  }

  .lists {
    padding: 2.4rem 4.8rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4.8rem;
    white-space: nowrap;
  }

  .caption {
    text-align: right;
  }

  .miniCaption {
    text-align: right;
  }

  .toggle {
    display: none;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    .border {
      display: none;
      // background-color: transparent;
      // border-radius: none;
      // margin-top: 2.4rem;
    }

    .toggle {
      color: white;
      display: block;
      float: right;
      margin-top: 2.4rem;
      position: absolute;
      right: 3rem;
    }
  }
`;

const NavBar = () => {
  return (
    <Wrapper className="NavBarWrapper container">
      {/* <img src={bgFeedback} alt="Cover" className="coverImage" /> */}

      <div className="flexRow">
        <div>
          <Spacer y={4.8} />
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <img
          src={hamburger}
          alt="hamburger"
          className="toggle"
          width="40rem"
          height="35rem"
        />
        <div className="border">
          <ul className="lists">
            <li className="active">Home</li>
            <li className="list">Manifesto</li>
            <li className="list">Coaching Plans</li>
            <li className="list">Testimonials</li>
            <li className="list">Contact Us</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
