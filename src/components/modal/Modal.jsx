import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { createPortal } from "react-dom";

const bacdrop = document.getElementById("bacdrop");
const modal = document.getElementById("modal");

const Modal = ({ search, setSearch }) => {
  const closeHandler = () => {
    search.delete("modal");
    setSearch(search);
  };
  return (
    <>
      {createPortal(<Bacdrop />, bacdrop)}
      {createPortal(
        <StyledModal>
          <StyledTitle>Add new material modal</StyledTitle>

          <StyledBox><Button onClick={closeHandler}>Close modal</Button></StyledBox>
        </StyledModal>,
        modal
      )}
    </>
  );
};

export default Modal;

const StyledBox = styled.div`
   margin-top: 300px;
`
const StyledTitle = styled.div`
   font-size: 3.1rem;
   font-weight: bold;
   margin-top: 140px;
   margin-left: 20px;
`;
const StyledModal = styled.div`
  width: 820px;
  height: 400px;
  background-color: #bd7c7c;
  position: absolute;
  top: 90px;
  left: 250px;
  padding: 50px 30px 20px 40px;
  display: flex;
`;
const Bacdrop = styled.div`
  width: 1366px;
  height: 1000px;
  background-color: black;
  position: fixed;
  top: 0;
  opacity: 0.6;
`;
