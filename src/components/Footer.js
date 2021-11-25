import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import youTube from "./images/youTube.svg";

const Wrapper = styled.div`
  background-color: #151e11;

  .brand {
    font-family: var(--font_italic);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }

  .footergrid {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
  }

  .instagram,
  .facebook,
  .twitter,
  .you-tube {
    margin-right: 3.2rem;
  }

  .mailing {
    font-family: var(--font_italic);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  .list,
  .active {
    margin-bottom: 1.2rem;
  }

  .mail {
    opacity: 0.2;
    color: #d9dbe1;
    padding: 1.5rem;
    border-radius: 2rem;
    width: 25.5rem;
  }

  .footergridSmall {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .footergrid {
      display: none;
    }

    .footergridSmall {
      display: block;
    }

    .instagram,
    .facebook,
    .twitter,
    .you-tube {
      margin-right: 2.4rem;
    }
  }
`;

const Address = () => {
  return (
    <Wrapper className="footerWrapper container ">
      <Spacer y={9.6} />
      <div className="footergrid colorWhite">
        <div>
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <Spacer y={4} />
          <div className="brand">
            <h4>© 2021 3pleozfitness.</h4>
            <Spacer y={0.2} />
            <h4>All rights reserved by 3PLEOZ ESSENTIALS LLC.</h4>
            <Spacer y={4} />
          </div>
          <div className="handles flexRow">
            <img src={instagram} alt="instagram" className="instagram" />
            <img src={facebook} alt="facebook" className="facebook" />
            <img src={twitter} alt="twitter" className="twitter" />
            <img src={youTube} alt="you-tube" className="you-tube" />
          </div>
          <Spacer y={8} />
        </div>
        <div className="border">
          <ul className="lists">
            <li className="active">Home</li>
            <li className="list">Manifesto</li>
            <li className="list">Coaching Plans</li>
            <li className="list">Testimonials</li>
            <li className="list">Contact Us</li>
          </ul>
          <Spacer y={9.6} />
        </div>
        <div>
          <h1 className="mailing">
            Stay in the know by joining our mailing list.
          </h1>
          <Spacer y={2.4} />
          <input
            className="mail"
            type="text"
            placeholder="Your email address"
          />
          <Spacer y={14} />
        </div>
      </div>

      <div className="footergridSmall colorWhite">
        <div>
          <h1 className="mailing">
            Stay in the know by joining our mailing list.
          </h1>
          <Spacer y={2.4} />
          <input
            className="mail"
            type="text"
            placeholder="Your email address"
          />
          <Spacer y={4.8} />
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <Spacer y={2.4} />
          <div className="border">
            <ul className="lists">
              <li className="active">Home</li>
              <li className="list">Manifesto</li>
              <li className="list">Coaching Plans</li>
              <li className="list">Testimonials</li>
              <li className="list">Contact Us</li>
            </ul>
            <Spacer y={4.8} />
          </div>
          <div className="brand">
            <h4>© 2021 3pleozfitness.</h4>
            <Spacer y={0.2} />
            <h4>All rights reserved by 3PLEOZ ESSENTIALS LLC.</h4>
            <Spacer y={2} />
          </div>
          <div className="handlesSmall flexRow">
            <img src={instagram} alt="instagram" className="instagram" />
            <img src={facebook} alt="facebook" className="facebook" />
            <img src={twitter} alt="twitter" className="twitter" />
            <img src={youTube} alt="you-tube" className="you-tube" />
          </div>
          <Spacer yMobile={4.8} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Address;
