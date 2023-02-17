import { NavLink, } from "react-router-dom";
import styled from "styled-components"

const isActiveLink = ({isActive}) => ({
   color: isActive ? "black":'white',
   textDecoration:"none"})

const Header  = ()=> {

    return(
    <Conteinar>
         <nav>
          <NavLink to="/courses/materials" style={isActiveLink}>Materials</NavLink>
          <NavLink to="/courses/student" style={isActiveLink}>Students</NavLink>
          <NavLink to="/courses/rating" style={isActiveLink}>Rating</NavLink>                             
         </nav>
    </Conteinar>
    )
}

export default Header

const Conteinar = styled.div`
    width: 1063px;
    background-color: #2f7dc7;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;  
    height: 100px; 
    padding-left: 30px;
    text-decoration:none;
    nav{
        width: 500px;
        display: flex;
        justify-content: space-between;
        font-size: 1.6rem;
        margin-right: 40px;
        color: #000000;
    } 
    
`
