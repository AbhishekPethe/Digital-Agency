import React from "react";
import { styled } from "styled-components";
import HeaderText from "./HeaderText";
import { updateDetails } from "../data";

const Wrapper = styled.section`
  background-color: var(--var-black2);
  padding: 4rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;

  .upper-section {
    display: grid;
    grid-template-columns: 80% 20%;

    h3 {
      margin-top: 30%;
      text-transform: uppercase;
      position: relative;
      word-spacing: 5px;
      letter-spacing: 3px;
    }
    h3::before {
      content: "";
      position: absolute;
      top: -30%;
      left: -15%;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: var(--var-gray2);
      opacity: 0.3;
    }
  }

  .lower-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 3rem;

    p:nth-of-type(1) {
      color: var(--var-gray1);
      width: fit-content;
      display: inline;
    }
    p:nth-of-type(2) {
      color: red;
      display: inline;
    }
    h1 {
      font-size: 35px;
    }
  }
`;

const Updates = () => {
  return (
    <Wrapper>
      <div className="upper-section">
        <HeaderText
          subtext="LATEST UPDATES"
          mainheading="Check Some of Our
Latest Update Blog "
        />

        <h3>View all blog</h3>
      </div>

      <div className="lower-section">
        {updateDetails.map((each) => {
          const { type, date, text } = each;

          return (
            <div className="each-update">
              <p>{type} | </p>

              <p>{date}</p>

              <h1>{text}</h1>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Updates;
