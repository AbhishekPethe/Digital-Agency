import React from 'react'
import { styled } from 'styled-components'


const Wrapper = styled.div`


    p{
        color : var(--var-gray1);
        width : fit-content;
    }
    h2{
        font-size: 40px;
        width: 60%;
    }
`

const HeaderText = ({subtext , mainheading}) => {
  return (
      <Wrapper className='section'>
          <p>{subtext}</p>
          <h2 className='heading'>{mainheading}</h2>
    </Wrapper>
  )
}

export default HeaderText