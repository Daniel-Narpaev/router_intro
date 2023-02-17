import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'
import Button from '../../components/UI/Button'


const student = [
  {title:'Student name 1', id: "1"},
  {title:'Student name 2', id: "2"},
]
const Student = () => {
  const navigate = useNavigate()
  return (
    <div>
        <Header/>
        <UlList>
        {student.map((item)=>{
          return(
            <ListItem key={item.id}>
               <p>{item.title}</p>
               <Button onClick={()=>navigate(`${item.id}/detail/`)}>
                Details
               </Button>
            </ListItem>
          )
        })}
        </UlList>
    </div>
  )
}

export default Student

const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`
const ListItem = styled.li`
  width: 91%;
  height: 90px;
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