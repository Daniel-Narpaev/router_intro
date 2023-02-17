import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/UI/Button'

const Notification = () => {
    const navigate = useNavigate()
    const goStudent = ()=> {
      navigate("/courses/materials")
    }
  return (
    <WhiteConteiner>
        <h1>Notification Page</h1>
        <BtnContainer>
         <Button onClick={goStudent}>Go to Materials Page</Button>   
        </BtnContainer>
    </WhiteConteiner>
  )
}

export default Notification

const BtnContainer = styled.div`
  margin-top: 60px;
`

const WhiteConteiner = styled.div`
  margin: 10px;
  background-color: white;
  height: 600px;
  width: 95%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 10px 0px 0px 20px;
  margin-bottom: 0;
`;