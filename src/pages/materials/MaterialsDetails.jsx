import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'
import NavBar from './NavBar'

const materials = [
    {details: "1", id:1},
    {details: "2", id:2},
]
const MaterialsDetails = () => {
    const [detail, setDetail] = useState({})

    const {id} = useParams()

    useEffect(() => {
        const materialItem = materials.find((item) => item.id === +id);
        setDetail(materialItem);
      }, [materials, id]);
  return (
    <Conteiner>
      <Header />
      <WhiteConteiner>
        <p>Material Details Page:</p>
        <p>Material {detail.details}</p>
      </WhiteConteiner>
      <NavBar />
      <OutletContainer>
        <Outlet/>
      </OutletContainer>
    </Conteiner>
  )
}

export default MaterialsDetails

const Conteiner = styled.main`
  background-color: #dedede;
  width: 95.4rem;
  height: 100vh;
`;

const WhiteConteiner = styled.div`
  margin: 10px;
  background-color: white;
  width: 96.3%;
  height: 150px;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 10px 0px 0px 20px;
  margin-bottom: 0;
`;

const OutletContainer = styled.div`
  background-color: #8dfa8d;
  font-size: 2rem; 
  margin-left: 10px;
  height: 39.5vh;
  padding:5px 30px;
  margin-right: 10px;
`;

