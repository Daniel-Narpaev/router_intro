import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'

const Rating = () => {
  return (
    <div>
        <Header/>
        <WhiteConteiner> Rating Page</WhiteConteiner>
    </div>
  )
}

export default Rating

const WhiteConteiner = styled.div`
  margin: 10px;
  background-color: white;
  width: 94.3%;
  height: 450px;
  font-size: 2rem;
  font-weight: bold;
  padding: 40px 0px 0px 45px;
  margin-bottom: 0;
`;