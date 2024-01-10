import React from 'react'
import { styled } from 'styled-components'
import HeaderText from './HeaderText'
import { HiOutlineArrowRight } from "react-icons/hi"
import { links } from '../data'


const Wrapper = styled.section`
  background-color: var(--var-black2);
  padding-top: 4rem;
  display: flex;
  flex-direction: column;

  .upper-section{
    display: grid;
    grid-template-columns : 80% 20%;

    h3{
        margin-top: 30%;
        text-transform: uppercase;
        position: relative;
        word-spacing: 5px;
        letter-spacing: 3px;
    }
    h3::before{
            content: "";
            position: absolute;
            top : -30%;
            left : -15%;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color : var(--var-gray2);
            opacity : 0.3;
        }
  }

  .Links{
    margin-inline: 3rem;
    
    .eachItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap : 10px;
        padding: 3rem;
        position: relative;
       
        h1{
            font-size: 50px;
        }
        p{
            position: absolute;
            top : 30%;
            left : 10px;
            color : var(--var-gray2);
            padding : -4rem;
        }
        svg{
            font-size : 50px;
            font-weight: 800;
            color: white;
        }
    
    }
    .eachItem::after{
        content : "";
        position: absolute;
        top : 100%;
        width : 100%;
        height: 2px;
        background-color: white;
        opacity: 0.3;
    }
    .eachItem:nth-of-type(2){
        svg{
            color : red;
            transform: rotate(-35deg);
        }
    }
  }
  

    
`


const Portfolio = () => {
    return (
        <Wrapper id='portfolio' className='section'>
            <div className="upper-section">

          <HeaderText subtext="PORTFOLIO" mainheading="We create places that
connect, sustain & inspire" />
                <h3>view all portfolio</h3>
</div>
            <div className='Links'>
                {links.map((link) => {
                    const {id , text} = link
                    return (
                        <div className="eachItem">

                            <p>{id}.</p>
                            <h1>{text}</h1>
                            <HiOutlineArrowRight />
                            
                        </div>
                        
                    )
                    
                })}
            </div>
    </Wrapper> 
  )
}

export default Portfolio