import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

    const isActiveLink = ({isActive}) => ({color: isActive ? "black":'white',textDecoration:'none'})
  return (
    <div>
      <UlList>
        <Li>
          <NavLink to="submitted" style={isActiveLink}>Submitted</NavLink>
        </Li>
        <Li>
          <NavLink to="waiting" style={isActiveLink}>Waiting</NavLink>
        </Li>
        <Li>
          <NavLink to="late" style={isActiveLink}>late</NavLink>
        </Li>
      </UlList>
    </div>
  );
};

export default NavBar;

const UlList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: #3da53d;
  margin:0px 10px 0px 10px;
  padding: 20px 600px 20px 30px;

  font-size: 1.7rem;
  font-weight:bold;

`
const Li = styled.li`
  
`
