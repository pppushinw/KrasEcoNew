import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const ListElement = styled.li`
  list-style: none;
  text-align: center;

  & a {
    text-decoration: none;
    color: #000000;
    transition-timing-function: ease-out;
    transition-duration: 0.1s;

    &:hover {
      color: #16ffff
    }
  }


`

export default function Contact() {
  return (
    <List>
      <ListElement><a href="tel:+77777777777">+7(777)777-77-77</a></ListElement>
      <ListElement><a href="tel:+88888888888">+8(888)888-88-88</a></ListElement>
    </List>
  )
}