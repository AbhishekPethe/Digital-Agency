import React from "react";
import { styled } from "styled-components";
import HeaderText from "./HeaderText";
import { RiFeedbackFill } from "react-icons/ri";
import { testimoialsDetails } from "../data";
import {FaQuoteLeft} from "react-icons/fa"

const Wrapper = styled.section`
  background-color: var(--var-black2);
  padding: 4rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;

  .upper-section {
    display: grid;
    grid-template-columns: 80% 20%;

    svg {
      margin-top: 1rem;
      font-size: 80px;
      color: red;
    }
  }

  .test-section {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2rem;
    padding: 3rem;

    .each-test {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h4 {
        color: var(--var-white);
        margin-bottom: 1rem;
        position: relative;
    }
      h4::before{
        content: "";
        position: absolute;
        top : 7%;
        left : -3%;
        width : 7px;
        height: 70px;
        background-color : red;

      }
      p {
        color: var(--var-white);
      }
      img {
        width: 100px;
        height: 100px;
        display: inline-block;
      }
      .name{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap : 2rem;
        
        svg{
            font-size : 50px;
            color : red;
            margin-left: 30%;
                }
      }
    }
  }
`;

const Testimonials = () => {
  return (
    <Wrapper id="testimonials">
      <div className="upper-section">
        <HeaderText
          subtext="TESTIMONIALS"
          mainheading="Feedback From Our Clients"
        />
        <RiFeedbackFill />
      </div>
      <div className="test-section">
        {testimoialsDetails.map((each) => {
          const { img, name, text } = each;
          return (
            <div className="each-test">
              <h4>{text}</h4>

              <div className="name">
                <img src={img} alt="" />
                <div>
                  <p>{name}</p>
                  <p style={{color : "red"}}>Customer</p>
                      </div>
                      <FaQuoteLeft />
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Testimonials;
