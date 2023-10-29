import React from "react";
import styled from "styled-components";
import Logo from "../../ui/logo/logo";
import Nav from "../navigation/navigation";
import Contact from "../contact/contact";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  max-width: 300px;
  width: 100%;
  position: sticky;
  height: 100vh;
  top: 0;
  border-right: 1px solid green;
`

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
      <Contact />
    </StyledHeader>
  )
}
