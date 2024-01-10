import React from "react";
import { styled } from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { footerDetails } from "../data";

const Wrapper = styled.section`
  background-color: var(--var-black1);
  padding-top: 8rem;
  color: white;
  padding-inline: 7rem;
  padding-bottom: 5rem;
  a {
    text-decoration: none;
    color: white;
  }

  .upper-section {
    display: grid;
    grid-template-columns: 30% 30%;
    gap: 40%;
    position: relative;
    padding-bottom: 3rem;

    .text {
      p {
        letter-spacing: 2px;
        margin-bottom: 2rem;
      }
      button {
        background-color: red;
        color: white;
        width: 8rem;
        height: 3rem;
        border-radius: 10px;
      }
    }
    .quick-links {
      h3 {
        margin-bottom: 1rem;
      }
    }
  }
  .upper-section::after {
    content: "";
    position: absolute;
    top: 100%;

    width: 100%;
    height: 2px;
    background-color: var(--var-gray2);
  }

  .lower-section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap : 3rem;
    margin-top: 3rem;
  }

`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="upper-section">
        <div className="text">
          <p>
            Want to get in touch? We are friendly and and available for a chat ,
            We'd love to hear from you. Here's how you can reach us...
          </p>
          <button>
            <BsTelephone /> +123 45678910
          </button>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          {footerDetails.map((each) => {
            return (
              <div>
                <a href={each.link}>{each.text}</a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower-section">
        
              
              <p>Terms of Use</p>
              <p>
          &copy; {new Date().getFullYear()} Code@{" "}
          <a href="https://abdev-myportfolio.netlify.app/" target="_blank">AB.dev</a>
              </p>
                  <p>Privacy Policy</p>
          
      </div>
    </Wrapper>
  );
};

export default Footer;
