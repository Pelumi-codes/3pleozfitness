import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "./images/menu.png";

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
            <Link to="/">
              <li className="list">Home</li>
            </Link>
            <a href="/#manifesto">
              <li className="list">Manifesto</li>
            </a>
            <a href="/#coachingPlans">
              <li className="list">Coaching Plans</li>
            </a>
            <a href="/#testimonials">
              <li className="list">Testimonials</li>
            </a>
            <a href="/#contactUs">
              <li className="list">Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
