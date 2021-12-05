import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import quote from "./images/quote.svg";
import arrow1 from "./images/arrow1.svg";
import arrow2 from "./images/arrow2.svg";
import { useState } from "react";

const Wrapper = styled.div`
  .feedbackCaption {
    background-color: #bfffb3;
    padding: 24.6rem 9.5rem 25.8rem 9.6rem;
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

const testimonies = [
  {
    name: "Jenny Wilson",
    title: "Parent",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque.",
  },
  {
    name: "Wade Wilson",
    title: "Parent",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque.",
  },
  {
    name: "Tyler Wilson",
    title: "Parent",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque.",
  },
];

const Customers = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);

  const next = () => {
    if (testimonyIndex > 1) {
      return;
    } else {
      setTestimonyIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (testimonyIndex === 0) {
      return;
    } else {
      setTestimonyIndex((prev) => prev - 1);
    }
  };

  return (
    <Wrapper className="aimWrapper" id="testimonials">
      <div className="feedback">
        <div className="feedbackCaption">
          <div>
            <h1 className="displayLarge happy">Happy customers</h1>
          </div>
          <Spacer y={0.8} />
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
              <h1 className="customerName">
                {testimonies[testimonyIndex]?.name}
              </h1>
            </div>
            <Spacer y={0.2} />
            <div>
              <h4 className="title">{testimonies[testimonyIndex]?.title}</h4>
            </div>
            <Spacer y={2.6} />
            <div>
              <div>
                <span className="textSmall feedbackContent">
                  {testimonies[testimonyIndex]?.message}
                </span>
                <Spacer y={9.3} />
                <div className="arrows flexRow">
                  <button type="button" onClick={prev}>
                    <img src={arrow1} alt="arrows" className="arrow1" />
                  </button>
                  <button type="button" onClick={next}>
                    <img src={arrow2} alt="arrows" className="arrow" />
                  </button>
                </div>
                <Spacer y={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={4.0} />
    </Wrapper>
  );
};

export default Customers;
