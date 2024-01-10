import React from "react";
import Navbar from "./Navbar";
import { styled } from "styled-components";
// import heroimg from "../assets/Agency/HomePage Images/unsplash.jpg"
// import heroimg from "../assets/Agency/HomePage Images/here area.png"
import heroimg from "../assets/Agency/HomePage Images/image (1).png";
import { GiCrossedBones } from "react-icons/gi";
import { BiDownvote } from "react-icons/bi";
import { details } from "../data";
import GroupImg from "../assets/Agency/HomePage Images/group 8.png";
import { Logos } from "../assets/Agency/HomePage Images";

const Wrapper = styled.main`
  background-color: var(--var-black1);
  .main-section {
    display: grid;
    grid-template-columns: 40% 60%;

    margin-top: 4rem;

    h1 {
      font-weight: 500;
      font-size: 100px;
      line-height: 135%;
      margin: 2rem;
    }

    .text-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        margin-inline: 2rem;
      }
      .scroll {
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        p {
          display: inline;
          width: fit-content;
          transform: rotate(-90deg);
        }
        svg {
          color: white;
          font-size: 3rem;
          z-index: 34;
        }
      }
    }

    .hero-section {
      width: 100%;
      height: 700px;
      position: relative;
      background-color: var(--var-black3);
    }
    .image-section {
      position: absolute;
      top: 0;
      left: 0;
      width: 75%;
      height: 500px;
    }
    img {
      width: 100%;
      overflow: hidden;
      object-fit: cover;
      height: 600px;
    }
    svg {
      position: absolute;
      top: 40%;
      left: -12%;
      color: var(--var-orange);
      /* color : red; */
      font-size: 10rem;
    }
    .details {
      margin-top: 3rem;
      position: absolute;
      right: 35px;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    .eachDetails {
      display: flex;
      flex-direction: column;
    }

    .people {
      position: absolute;
      bottom: 1rem;
      left: 3rem;
      width: 100%;
      height: 70px;

      display: flex;
      flex-direction: row;
      
      gap : 2rem;
      img {
        width: fit-content;
        height: auto;
        object-fit: contain;
      }
      p{
        margin-top: 0.7rem;
      }
      
    }

    p {
      color: var(--var-white);
    }
    h2 {
      font-size: 40px;
    }
  }
  .sponsors{
    margin-block : 6rem;
    display: flex;
    justify-content: space-around;
    gap : 1rem;
  }
`;

const Home = () => {
  return (
    <Wrapper className="section">
      <Navbar />
      <main className="main-section">
        <div className="text-section">
          <h1>Digital Agency Solution</h1>
          <p>
            "Transforming businesses through innovative digital solutions, we
            are a leading agency that combines technology and creativity to
            drive growth and success."
          </p>
          <div className="scroll">
            <p>Scroll</p>
            <BiDownvote />
            <BiDownvote />
            <BiDownvote />
          </div>
        </div>
        <div className="hero-section">
          <div className="image-section">
            <GiCrossedBones />
            <img src={heroimg} alt="hero" />
          </div>
          <div className="details">
            {details.map((each) => {
              const { h3, p } = each;
              return (
                <div className="eachDetail">
                  <h2>{h3}</h2>
                  <p>{p}</p>
                </div>
              );
            })}
          </div>
          <div className="people">
            <img src={GroupImg} alt="grp" />
            <p>
              240 Business People <br />
              Already Registered
            </p>
          </div>
        </div>
          </main>
          <div className="sponsors">
              {Logos.map((logo) => {
                  return (
                      <img src={logo} alt="" />
                  )
              })}
          </div>
    </Wrapper>
  );
};

export default Home;
