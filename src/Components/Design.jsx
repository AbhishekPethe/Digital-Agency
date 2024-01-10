import React from 'react'
import { styled } from 'styled-components'
import { DesignData } from '../data'


const Wrapper = styled.section`
    background-color: var(--var-black3);
    padding : 5rem;
   
    .items{
        display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap : 3rem;
    margin-left: 4rem;
    .heading{
        font-size: 50px;
        position: relative;
       
    }
    .heading:nth-child(2){
        margin-left: 3.5rem;
    }
    .heading:nth-child(2)::before{
        content: "";
        position: absolute;
        top : 50%;
        left : -15%;
        width: 2rem;
        height: 0.3rem;
        background-color: white;

    }
    .stroke{
        color : black;
        z-index: 1;
        text-shadow: -1px 1px 0 #ffffff,
				  1px 1px 0 #ffffff,
				 1px -1px 0 #ffffff,
				-1px -1px 0 #ffffff;
        }
    .eachItem{
       position: relative;
      
        p{
            color : var(--var-gray2);
            width: 78%;
            margin-block: 1rem;
        }
        li{
            color : var(--var-white);
            
        }
        svg{
            font-size: 60px;
            color : red;
            position: absolute;
            top : 2%;
            left : -9%;
            z-index: 0;
        }
       
    }
    }
    
`

const Design = () => {
  return (
      <Wrapper>
          <div className="items">
              {DesignData.map((each) => {
                  const { h1, p, bullets , svg } = each;
                  let strokeText = h1.split(" ")
                  return (<div className='eachItem'>
                      
                      <h1 className='stroke heading'>{strokeText[0]}</h1>
                      <h1 className='heading'>{strokeText[1]}</h1>
                      <p>{p}</p>
                      {svg}
                      {bullets.map((point) => {
                          return (
                              
                              <li>{point}</li>
                          )
                      })}
                  </div>
                      
                  )
              })}
        </div>
    </Wrapper>
  )
}

export default Design