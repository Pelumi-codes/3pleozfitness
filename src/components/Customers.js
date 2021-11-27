import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import quote from "./images/quote.svg";
import arrow1 from "./images/arrow1.svg";
import arrow2 from "./images/arrow2.svg";

const Wrapper = styled.div`
  .feedbackCaption {
    background-color: #bfffb3;
    padding: 24.6rem 9.5rem 25.8rem 16.5rem;
  }

  .feedback {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .customer {
    padding: 0 4rem;
    background-color: #ffffff;
  }

  .quote {
    float: right;
  }

  .customerName {
    font-family: var(--font_semi_bold);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  .title {
    font-family: var(--font_italic);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  .feedbackContent {
    text-align: justify;
  }

  .arrows {
    float: right;
  }

  .arrow1 {
    margin-right: 3rem;
  }

  .large {
    background-color: #faf6f3;
    padding: 3.2rem 16.5rem 3.2rem 0;
  }

  @media screen and (max-width: 768px) {
    height: auto;

    .feedback {
      grid-template-columns: 1fr;
    }

    .feedbackCaption {
      background-color: #bfffb3;
      padding: 17.8rem 2.4rem 17.8rem 2.4rem;
    }

    .happyFeedback {
      width: 100%;
      text-align: center;
    }

    .happy {
      text-align: center;
    }

    .customer {
      padding: 0 2.4rem;
    }

    .large {
      background-color: #faf6f3;
      padding: 4.8rem 2.7rem 3.8rem 0;
    }
  }
`;

const Customers = () => {
  return (
    <Wrapper className="aimWrapper" id="customers">
      <div className="feedback">
        <div className="feedbackCaption">
          <div>
            <h1 className="displayLarge happy">Happy customers</h1>
          </div>
          <div>
            <h3 className="textSmall happyFeedback">
              Feedback from these happy customers helps us in reaching the
              heights
            </h3>
          </div>
        </div>

        <div className="large">
          <div className="customer">
            <Spacer y={4} />
            <img src={quote} alt="quote" className="quote" />

            <div>
              <Spacer y={13.2} />
              <h1 className="customerName">Jenny Wilson</h1>
            </div>
            <Spacer y={0.2} />
            <div>
              <h4 className="title">Parent</h4>
            </div>
            <Spacer y={2.6} />
            <div>
              <p className="textSmall feedbackContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
                rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
                volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui
                fringilla consectetur id nec massa. Aliquam erat volutpat. Sed
                ut dui ut lacus dictum fermentum vel tincidunt neque.
                <Spacer y={9.3} />
                <div className="arrows flexRow">
                  <botton>
                    <img src={arrow1} alt="arrows" className="arrow1" />
                  </botton>
                  <button>
                    <img src={arrow2} alt="arrows" className="arrow" />
                  </button>
                </div>
                <Spacer y={10} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={4.0} />
    </Wrapper>
  );
};

export default Customers;
