import { NavLink, } from "react-router-dom";
import styled from "styled-components"

const isActiveLink = ({isActive}) => ({
    color: isActive ? "black":'blue'})

const SideBars  = ()=> {

    return(
    <Conteinar>
        <SideBar>
         <Logo>LOGO</Logo>
         <NavBar>
          <NavLink to="/courses/materials" style={isActiveLink}>Courses</NavLink>
          <NavLink to="/anouncements" style={isActiveLink}>Anouncements</NavLink>
          <NavLink to="/notifications" style={isActiveLink}>Notifications</NavLink>                             
          <NavLink to="/schedule" style={isActiveLink}>Schedule</NavLink>                             
         </NavBar>
        </SideBar>
    </Conteinar>
    )
}

export default SideBars

const Conteinar = styled.div`
   height: 100vh;
   width: 20%;
   background-color: #dbcfcf;
   display: flex;
`
const Logo = styled.p`
  font-size: 1.6rem;
  font-weight: bolder;
  font-family:  Verdana, sans-serif;
  color: #a00c99;
  padding: 0;
  margin: 60px 0px 60px 30px;  
`
const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.4rem;
    font-weight: bold;  
      
`
const NavBar = styled.div`
    height: 200px; 
    width: 243px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    padding-left: 30px;
    a {
        width: 198px;
        text-decoration:none;
        font-size: 1.4rem;
        margin-right: 40px;
        color: blue;
    }
    
`
