import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'

const students = [
    {student: "1", id:1},
    {student: "2", id:2},
]
const StudentDetails = () => {
    const [studentDetail, setStudentDetail] = useState({})

    const {id} = useParams()

    useEffect(() => {
        const studentItem = students.find((item) => item.id === +id);
        setStudentDetail(studentItem);
      }, [students, id]);
  return (
    <Conteiner>
      <Header />
      <WhiteConteiner>
        <p>Student Details Page:</p>
        <p>Student name{studentDetail.student}</p>
      </WhiteConteiner>
    </Conteiner>
  )      
}

export default StudentDetails

const Conteiner = styled.main`
  background-color: #dedede;
  width: 95.4rem;
`;

const WhiteConteiner = styled.div`
  margin: 10px;
  background-color: white;
  width: 96.3%;
  height: 500px;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 10px 0px 0px 20px;
  margin-bottom: 0;
`;

