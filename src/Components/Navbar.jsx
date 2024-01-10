import React from "react";
import { styled } from "styled-components";
import { BsArrowDownShort} from "react-icons/bs"

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  gap : 3rem;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--var-white);
    svg{
      font-size : larger;
      
    }
  }
  
`;

const Navbar = () => {
  return (
   
      <Wrapper>
        
        <a href="#" style={{ color: "var(--var-orange)"}}>
          Home 
        </a>
        <a href="#team">
          Team <BsArrowDownShort />
        </a>
        <a href="#about">
          About <BsArrowDownShort />
        </a>
        <a href="#contact"> 
          Contact <BsArrowDownShort />
        </a>
        <a href="#testimonials">
          Testimonials <BsArrowDownShort />
      </a>
      <a href="#portfolio">
          Portfolio <BsArrowDownShort />
        </a>
      </Wrapper>

  );
};

export default Navbar;
