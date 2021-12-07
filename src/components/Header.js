import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import hamburger from "./images/menu.png";
import closeIcon from "./images/close.svg";
import headerImg from "./images/header.jpg";
import { scrollTo } from "../utils";
import { useState } from "react";
import facebook_black from "./images/facebook_black.svg";
import instagram_black from "./images/instagram_black.svg";

const Wrapper = styled.div`
  position: relative;
  background: transparent;
  width: 100vw;
  overflow: hidden;
  padding: unset;

  .logoWrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .coverImg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    min-height: 100%;
    min-width: 100%;
    z-index: -1;
    filter: brightness(0.5);
  }

  .navWrapper {
    position: relative;
  }

  .caption {
    text-align: right;
    padding: ;
  }

  .miniCaption {
    text-align: right;
  }

  .btnHeader {
    float: right;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .caption {
      text-align: center;
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

export const Navbar = styled.div`
  background-color: #ffffff;
  padding: 2.4rem 9.6rem;
  width: 100vw;

  &.stickyTop {
    position: fixed;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 2.4rem;
  }
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 2.4rem;
  white-space: nowrap;

  .listItem {
    color: #8d9091;
    cursor: pointer;

    &.active {
      color: #02a0a4;
    }
  }

  .menuHeader {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 120px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 120px);
    overflow: auto;
    border-radius: unset;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    padding: 2.4rem;
    z-index: 20;
    background-color: #ffffff;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-out;

    &.open {
      opacity: 1;
      pointer-events: all;
    }

    .listItem {
      height: max-content;
      color: #151515;
      font-size: 18px;
      line-height: 28px;
    }

    .menuHeader {
      display: flex;
      height: 12rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 2.4rem;
    }
  }
`;

export const Hamburger = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Wrapper className="headerWrapper container section" id="header">
      <img src={headerImg} alt="Cover" className="coverImg" />
      <Navbar className={menuOpen ? "stickyTop" : ""}>
        <div className="flexRow alignCenter">
          <a
            href="https://www.facebook.com/3pleoz"
            target="_blank"
            rel="noreferer noopener noreferrer"
          >
            <img src={facebook_black} alt="facebook" className="facebook" />
          </a>
          <Spacer x={1.2} />
          <a
            href="https://www.instagram.com/3pleozfitness/"
            target="_blank"
            rel="noreferer noopener noreferrer"
          >
            <img src={instagram_black} alt="instagram" className="instagram" />
          </a>
        </div>
        <Spacer y={3.6} />
        <div className="flexRow justifySpaceBetween alignCenter navWrapper">
          <Hamburger
            className={`${menuOpen ? "open" : "closed"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen && (
              <img src={hamburger} alt="menu" className="menuIcon" />
            )}
            {menuOpen && (
              <img src={closeIcon} alt="menu" className="closeIcon" />
            )}
          </Hamburger>

          <Menu className={`${menuOpen ? "open" : "closed"}`}>
            <Link to="/">
              <li className="listItem active">HOME</li>
            </Link>
            <a href="https://3pleozfitness.com/collections/all">
              <li className="listItem">SHOP</li>
            </a>
            <a href="https://3pleozfitness.com/collections/soccer-coaching-plans">
              <li className="listItem">SOCCER COACHING</li>
            </a>
            <a href="https://3pleozfitness.com/pages/contact">
              <li className="listItem">CONTACT US</li>
            </a>
          </Menu>
          <div className="logoWrapper">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
        </div>
      </Navbar>

      <Spacer y={10.8} yMobile={13.2} />
      <div className="captionWrapper">
        <h1 className="displayLargeBold colorWhite caption">
          3PLEOZ SKILLZ ACADEMY
        </h1>
        <Spacer y={1} />
        <h3 className="displayMediumText colorWhite miniCaption">
          training for Boys and Girls of all ages and skill levels.
        </h3>
      </div>
      <Spacer y={4.8} />
      <Button
        text="See all coaching plans"
        className="btnHeader"
        onClick={() => scrollTo("coachingPlans")}
        normal
        maxWidth
      />
      <Spacer yMobile={42.6} />
    </Wrapper>
  );
};

export default Header;
