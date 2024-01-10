import React from "react";
import { styled } from "styled-components";
import contact from "../assets/Agency/contact.png";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.section`
  background-color: var(--var-black2);
  padding: 4rem;
  padding-top: 5rem;

  position: relative;
  

  .img {
    width: 100%;
    height: fit-content;
    margin-left: 4rem;

    img {
      width: 100%;
      height: 39rem;
      object-fit: cover;
    }
  }

  .contact-container {
    width: 80%;
    height: 40%;
    background-color: var(--var-black3);
    position: absolute;
    top: 60%;
    left: 0%;
    margin-left: 2rem;
    display: grid;
    grid-template-columns: 75% 25%;
    align-content: center;
    gap: 1rem;  
    padding: 1rem;

    h1 {
      font-size: 5rem;
    }

    .circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: red;
      position: relative;
      
      .text{
      position: absolute;
      top : 50%;
      left : 50%;
      transform: translate(-50%,-50%);
      font-size: larger;
      color : white;
       
      }

    }
    
   
  }
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="img">
        <img src={contact} alt="" />
      </div>
      <div className="contact-container">
        <h1>
          Let’s Make Something Great{" "}
          <span style={{ color: "red" }}> Together!</span>{" "}
        </h1>

        <div className="circle">
          <div className="text">
            CONTACT US <FiArrowUpRight />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
