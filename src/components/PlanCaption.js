import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "./images/menu.png";
import closeIcon from "./images/close.svg";
import { useState } from "react";
import { Hamburger, Menu, Navbar } from "./Header";
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

const ImgWrapper = styled.div`
  height: 560px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 4rem;

  img {
    min-height: 100%;
    min-width: 105%;
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
              <li className="listItem">HOME</li>
            </Link>
            <a href="https://3pleozfitness.com/collections/all">
              <li className="listItem">SHOP</li>
            </a>
            <a href="https://3pleozfitness.com/collections/soccer-coaching-plans">
              <li className="listItem active">SOCCER COACHING</li>
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
