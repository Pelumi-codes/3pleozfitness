import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "./images/menu.png";
import closeIcon from "./images/close.svg";
import { useState } from "react";

const Wrapper = styled.div`
  position: relative;
  background: transparent;
  width: 100vw;
  overflow: hidden;

  .coverImg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    min-height: 100%;
    min-width: 100%;
    z-index: -1;
  }

  .navWrapper {
    height: 12rem;
  }

  .miniCaption {
    text-align: right;
  }

  .btnHeader {
    float: right;
  }

  @media screen and (max-width: 768px) {
    height: unset;
    // min-height: 100vh;

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

const Menu = styled.ul`
  padding: 2.4rem 4.8rem;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 4.8rem;
  white-space: nowrap;
  background-color: white;
  border-radius: 40px;

  .listItem {
    color: #8d9091;
    cursor: pointer;

    &.active {
      color: #155509;
    }
  }

  .menuHeader {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    border-radius: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-color: #151e11;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-out;

    &.open {
      opacity: 1;
      pointer-events: all;
    }

    .listItem {
      height: max-content;
      color: #ffffff;
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

const Hamburger = styled.button`
  height: 4.8rem;
  width: 4.8rem;
  background-color: #ffffff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: none;

  &.open {
    background-color: #bfffb320;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ImgWrapper = styled.div`
  height: 560px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1.2rem;

  img {
    height: 100%;
    width: auto;
  }

  @media screen and (max-width: 768px) {
    height: 240px;
    width: 300px;
  }
`;

const PlanCaption = ({ coverImg, mainImg, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Wrapper className="headerWrapper container section" id="header">
      <img src={coverImg} alt="Cover" className="coverImg" />

      <div className="flexRow justifySpaceBetween alignCenter navWrapper">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen && <img src={hamburger} alt="menu" className="menuIcon" />}
          {menuOpen && <img src={closeIcon} alt="menu" className="closeIcon" />}
        </Hamburger>

        <Menu className={`${menuOpen ? "open" : "closed"}`}>
          <div className="menuHeader flexRow justifySpaceBetween alignCenter">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>

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
          </div>
          <a href="/">
            <li className="listItem">Home</li>
          </a>
          <a href="/#manifesto" onClick={() => setMenuOpen(false)}>
            <li className="listItem">Manifesto</li>
          </a>
          <a href="/#coachingPlans" onClick={() => setMenuOpen(false)}>
            <li className="listItem">Coaching Plans</li>
          </a>
          <a href="/#testimonials" onClick={() => setMenuOpen(false)}>
            <li className="listItem">Testimonials</li>
          </a>
          <a href="/#contactUs" onClick={() => setMenuOpen(false)}>
            <li className="listItem">Contact Us</li>
          </a>
        </Menu>
      </div>
      <Spacer y={4.8} />
      <h2 className="displayLarge colorWhite caption textCenter">{title}</h2>
      <Spacer y={4.8} />
      <ImgWrapper>
        <img src={mainImg} alt="main caption" />
      </ImgWrapper>
      <Spacer y={9.6} />
    </Wrapper>
  );
};

export default PlanCaption;
