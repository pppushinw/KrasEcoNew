import React from "react";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 200px;
`

const ListElement = styled.li`
  list-style: none;
  text-align: center;
`


export default function Nav() {
  return (
    <StyledNav>
      <List>
        <ListElement>Услуги</ListElement>
        <ListElement>Способы и методы дезинфекции</ListElement>
        <ListElement>Контакты</ListElement>
      </List>
    </StyledNav>
  )
}