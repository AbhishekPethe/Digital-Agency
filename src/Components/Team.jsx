import React from "react";
import { styled } from "styled-components";
import HeaderText from "./HeaderText";
import { teamDetails } from "../data";



const Wrapper = styled.section`
  background-color: var(--var-black2);
  padding: 4rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;

  .upper-section {
    display: grid;
    grid-template-columns: 60% 40%;

    h2 {
      width: 73%;
    }

    h3 {
      margin-top: 15%;
    }
  }

  .image-container{
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    gap : 1rem;

    .each-image{
        display: flex;
        flex-direction: column;
        gap : 0.2rem;
        width: 90%;
        height: 400px;

        img{
            width: auto;
            height: 100%;
            object-fit : contain;
        }
        p{
            color : var(--var-gray1)
        }
    }
    
  }
`;

const Team = () => {
  return (
    <Wrapper id="team">
      <div className="upper-section">
        <HeaderText
          subtext="OUR TEAM"
          mainheading="Builds Our Future Experience Team Members"
          className="headertext"
        />

        <h3>
          "Our diverse team of experts is united by a shared passion for
          delivering exceptional results and exceeding client expectations."
        </h3>
          </div>
          
          <div className="image-container">
              {teamDetails.map((each) => {
                  const {img , name , title} = each
                  return (
                      <div className="each-image">
                          <img src={img} alt="image" />
                          <h3>{name}</h3>
                          <p>{title}</p>

                      </div>
                  )
              })}
          </div>
    </Wrapper>
  );
};

export default Team;
