import React from "react";
import { styled } from "styled-components";
import HeaderText from "./HeaderText";
import image from "../assets/Agency/image.png";
import { FaConfluence, FaGoogleWallet } from "react-icons/fa";

const Wrapper = styled.section`
  background-color: var(--var-black2);
  display: flex;
  flex-direction: column;
  padding: 4rem;
  height: fit-content;

  .main-section {
    display: grid;
    grid-template-columns: 50% 40%;
    gap: 10%;

    .image {
      width: 100%;
      height: 500px;
      margin: 2rem;
      position: relative;
      display: flex;

      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        z-index: 1;
      }

      .svg1 {
        position: absolute;
        right: -5%;
        top: -10%;
        font-size: 8rem;
        color: red;
        transform: rotate(-30deg);
        z-index: 0;
      }
      .svg2 {
        position: absolute;
        left: -5%;
        top: 90%;
        font-size: 8rem;
        color: red;
        transform: rotate(40deg);
        z-index: 2;
      }
    }


    .text-section{
        margin-top: 2rem;
        position: relative;
        p{
            color : var(--var-gray2);
            line-height: 2rem;
            margin-bottom: 2rem;
        }
        h3{
            margin-top: 3rem;
            word-spacing: 5px;
            letter-spacing: 3px;
            position: relative;
        }
        h3::before{
            content: "";
            position: absolute;
            top : -80%;
            left : -5%;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color : var(--var-gray2);
            opacity : 0.3;
        }
        .container{
            width: 400px;
            height: 150px;
            position: absolute;
            top : 80%;
            left : -50%;
            background-color : #333333;
            z-index: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            gap : 3rem;

           .item{
            margin-top: 1rem;
            h2{

                font-size: xx-large;
            }
           }
        }
    }

  }
`;

const About = () => {
  return (
    <Wrapper id="about">
      <HeaderText 
        subtext="ABOUT US"
        mainheading="We Create Digital World Class Business
Agency Marketplace"
      />
      <div className="main-section">
        <div className="image">
          <FaGoogleWallet className="svg1" />
          <FaConfluence className="svg2" />
          <img src={image} alt="Model Image" />
        </div>
        <div className="text-section">
          <p>
            At our digital solution agency, we are passionate about crafting
            transformative experiences that propel businesses forward. With a
            team of skilled experts, we specialize in developing cutting-edge
            web and mobile applications tailored to our clients' unique needs.
          </p>
          <p>
            Our innovative approach, fueled by creativity and technological
            expertise, ensures that we deliver exceptional results and exceed
            client expectations. Partner with us to unlock your business's full
            digital potential and drive sustainable growth.
                  </p>
            
                  <h3>LEARN MORE</h3>

                  <div className="container">
                      <div className="item">
                          <h2>300+</h2>
                          <p>Working People</p>
                      </div>
                      <div className="item">
                          <h2>20+</h2>
                          <p>World Office</p>
                      </div>
                </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
