import React from 'react'
import styled from 'styled-components'


const Text = styled.section`

display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
gap : 2rem;

h1{
    width: fit-content;
    font-size: 2rem;
    color : black;
    font-weight: 500;
    span{
        color : green;
    }
}

`

const Mobile = () => {
  return (
    <Text >
          <h1>You are using a mobile device.</h1>
          <h1>This website is curently visible on <span>DESKTOP</span> only.</h1>
          <p>Kindly open it on Desktop Devices</p>
    </Text>
  )
}

export default Mobile