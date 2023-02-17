import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'
import Modal from '../../components/modal/Modal'
import Button from '../../components/UI/Button'

const material = [
  {title:'Materials 1', id: "1"},
  {title:'Materials 2', id: "2"},
]
const Materials = () => {
  const navigate = useNavigate()

  const [searchParam, setSearchParam] = useSearchParams()

  const modalClick = () => {
    searchParam.set('modal', 'addNewMaterials');
    setSearchParam(searchParam)
  }
  return (
    <div>
        <Header/>
        {searchParam.has("modal") ? (
          <Modal search={searchParam} setSearch={setSearchParam}/>
        ): null}
        <UlList>
          <ButtonModal onClick={modalClick}>
          Add new materials
        </ButtonModal>
        {material.map((item)=>{
          return(
            <ListItem key={item.id}>
               <p>{item.title}</p>
               <Button onClick={()=>navigate(`${item.id}/details/submitted`)}>
                Details
               </Button>
            </ListItem>
          )
        })}
        </UlList>
    </div>
  )
}

export default Materials

const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

`
const ListItem = styled.li`
  width: 91%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  margin-bottom: 20px;
  margin-right: 30px;
  padding: 0px 30px;
  font-size: 1.5rem;
  font-weight: bold;
`
const ButtonModal = styled.button`
    background-color: #ca7423;
    padding: 10px 50px;
    border-radius: 25px;
    color: #ffffff;
    font-size: 1.3rem;
    border: none;
    margin: 70px 30px 50px 0px;
`
