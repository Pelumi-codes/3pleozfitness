import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo.svg";
import Button from "./Button";
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

  .btnHeader {
    float: right;
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

    .lists {
      display: none;
      // padding: 2.4rem 4.8rem;
      // grid-template-columns: 1fr;
      // grid-gap: 4.8rem;
    }
    .caption {
      text-align: center;
    }
    .logo {
      margin-right: 0;
    }

    .miniCaption {
      text-align: center;
      margin: 0 auto;
      width: 80%;
    }

    .btnHeader {
      margin: 0 auto;
      float: none;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper className="headerWrapper container section">
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
          position="absolute"
        />
        <div className="border">
          <ul className="lists">
            <Link to="/">
              <li className="active">Home</li>
            </Link>
            <a href="#aim">
              <li className="list">Manifesto</li>
            </a>
            <a href="#plan">
              <li className="list">Coaching Plans</li>
            </a>
            <a href="#customers">
              <li className="list">Testimonials</li>
            </a>
            <a href="#address">
              <li className="list">Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
      <Spacer y={10.8} yMobile={13.2} />
      <div>
        <h1 className="displayLargeBold colorWhite caption">
          3PLEOZ SKILLZ ACADEMY
        </h1>
        <h3 className="displayMediumText colorWhite miniCaption">
          training for Boys and Girls of all ages and skill levels.
        </h3>
      </div>
      <Spacer y={4.8} />
      <Button
        text="See all coaching plans"
        className="btnHeader"
        normal
        maxWidth
      />
      <Spacer yMobile={42.6} />
    </Wrapper>
  );
};

export default Header;
