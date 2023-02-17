import React from 'react'
import styled from 'styled-components'

const Button = ({children,onClick}) => {
  return (
    <Btn onClick={onClick}>
        {children}
    </Btn>
  )
}

export default Button

const Btn = styled.button`
    background-color: #2c9959;
    padding: 10px 50px;
    border-radius: 25px;
    color: #000000;
    font-size: 1.3rem;
    border: none;
`